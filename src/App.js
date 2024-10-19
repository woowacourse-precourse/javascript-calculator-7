import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );
      const result = this.calculateSum(input);
      Console.print(`결과: ${result}`);
    } catch (error) {
      Console.print(`[ERROR] 에러 발생`);
    }
  }

  calculateSum(input) {
    let numberString = input;
    const customDelimiter = this.extractCustomDelimiter(input);

    if (customDelimiter) {
      numberString = this.getNumberString(input, customDelimiter);
      this.checkForMismatchedDelimiter(numberString, customDelimiter);
    } else {
      this.hasDefaultDelimiter(numberString);
    }

    const numbers = this.parseNumbers(numberString, customDelimiter);

    return numbers.reduce((sum, num) => sum + num, 0);
  }

  extractCustomDelimiter(input) {
    const CUSTOM_DELIMITER_REGEX = /^\/\/(.+?)\\n/;
    const customDelimiterMatch = input.match(CUSTOM_DELIMITER_REGEX);
    return customDelimiterMatch ? customDelimiterMatch[1] : null;
  }

  getNumberString(input, customDelimiter) {
    const CUSTOM_DELIMITER_REGEX = /^\/\/(.+?)\\n/;
    const customDelimiterLength = customDelimiter
      ? input.match(CUSTOM_DELIMITER_REGEX)[0].length
      : 0;
    return input.slice(customDelimiterLength).trim();
  }

  hasDefaultDelimiter(numberString) {
    const DEFAULT_DELIMITERS = /[,:]/g;
    return DEFAULT_DELIMITERS.test(numberString);
  }

  checkForMismatchedDelimiter(numberString, customDelimiter) {
    if (!numberString.includes(customDelimiter)) {
      throw new Error();
    }
  }

  parseNumbers(input, customDelimiter) {
    const DEFAULT_DELIMITERS = /[,:]/g;
    const delimiter = customDelimiter || DEFAULT_DELIMITERS;

    return input
      .split(delimiter)
      .map((num) => num.trim())
      .filter((num) => num !== "")
      .map(Number);
  }
}

export default App;
