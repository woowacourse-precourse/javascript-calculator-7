import { ERROR } from "./utils/messages.js";

class DelimiterParser {
  constructor(input) {
    this.delimiters = [",", ":"];
  }

  checkDelimiterHasNumber(customDelimiter) {
    if (/\d/.test(customDelimiter)) {
      throw new Error(ERROR.CUSTOM_DELIMITER_HAS_NUMBER);
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

  getCustomDelimiter(input) {
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

  splitString(input) {
    const [parseInput, delimiters] = this.getCustomDelimiter(input);
    this.checkInvalidCharacters(parseInput, delimiters);
    console.log(parseInput, delimiters);

    const delimiterRegex = new RegExp(`(${delimiters.join("|")})`);

    return parseInput
      .split(delimiterRegex)
      .map(Number)
      .filter((num) => !isNaN(num));
  }

  escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
}

export default DelimiterParser;
