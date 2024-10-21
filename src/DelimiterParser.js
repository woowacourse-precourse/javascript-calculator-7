import { ERROR } from "./utils/messages.js";

class DelimiterParser {
  static DEFAULT_DELIMITERS = [",", ":"];

  constructor() {
    this.delimiters = [...DelimiterParser.DEFAULT_DELIMITERS];
  }

  checkDelimiterHasNumber(customDelimiter) {
    if (/\d/.test(customDelimiter)) {
      throw new Error(ERROR.CUSTOM_DELIMITER_HAS_NUMBER);
    }
  }

  checkNegativeNumbers(numbers) {
    const negativeNumbers = numbers.filter((num) => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`${ERROR.NEGATIVE_NUMBER} ${negativeNumbers.join(", ")}`);
    }
  }

  checkInvalidCharacters(input, delimiters) {
    const delimiterRegex = new RegExp(
      `${delimiters.map((d) => `(${d})`).join("|")}|\\d`
    );

    for (const char of input) {
      if (!delimiterRegex.test(char)) {
        throw new Error(ERROR.INVALID_CHARACTER);
      }
    }
  }

  getCustomDelimiters(input) {
    input = input.replace("\\n", "\n").trim();
    let delimiters = [...this.delimiters];
    while (input.startsWith("//")) {
      const delimiterEndIndex = input.indexOf("\n");
      if (delimiterEndIndex === -1) {
        throw new Error(ERROR.INVALID_CUSTOM_DELIMITER);
      }

      const customDelimiter = input.substring(2, delimiterEndIndex);

      this.checkDelimiterHasNumber(customDelimiter);

      delimiters.push(this.escapeRegExp(customDelimiter));
      input = input.substring(delimiterEndIndex + 1);
    }
    return [input, delimiters];
  }

  splitInputToNumbers(input) {
    const [parseInput, delimiters] = this.getCustomDelimiters(input);

    const delimiterRegex = new RegExp(`(${delimiters.join("|")})`);
    const numbers = parseInput
      .split(delimiterRegex)
      .map(Number)
      .filter((num) => !isNaN(num));

    if (!delimiters.includes("-")) {
      this.checkNegativeNumbers(numbers);
    }
    this.checkInvalidCharacters(parseInput, delimiters);

    return numbers;
  }

  escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
}

export default DelimiterParser;
