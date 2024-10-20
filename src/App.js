import { Console } from "@woowacourse/mission-utils";
import ERROR from "./errors/errors.js";
import CustomError from "./errors/CustomError.js";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );
      const result = this.calculateSum(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(`${error.message}(${error.name})`);
      throw error;
    }
  }

  calculateSum(input) {
    this.checkEmptyString(input);
    const customDelimiter = this.extractCustomDelimiter(input);
    let numberString = this.getNumberString(input, customDelimiter);

    if (this.checkSingleNumber(numberString)) {
      return Number(numberString);
    }

    if (customDelimiter) {
      this.checkForMismatchedDelimiter(numberString, customDelimiter);
    } else {
      this.checkForDefaultDelimiter(numberString);
    }

    const numbers = this.parseNumbers(numberString, customDelimiter);
    this.validateNumbers(numbers);

    return numbers.reduce((sum, num) => sum + num, 0);
  }

  checkEmptyString(input) {
    if (!input) {
      throw new CustomError(
        ERROR.EMPTY_STRING.message,
        ERROR.EMPTY_STRING.name
      );
    }
  }

  checkSingleNumber(numberString) {
    return !isNaN(numberString) && numberString.trim() !== "";
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

  checkForDefaultDelimiter(numberString) {
    if (!this.hasDefaultDelimiter(numberString)) {
      throw new CustomError(
        ERROR.INVALID_INPUT.message,
        ERROR.INVALID_INPUT.name
      );
    }
  }

  checkForMismatchedDelimiter(numberString, customDelimiter) {
    if (!numberString.includes(customDelimiter)) {
      throw new CustomError(
        ERROR.MISMATCHED_DELIMITER.message,
        ERROR.MISMATCHED_DELIMITER.name
      );
    }
  }

  validateNumbers(numbers) {
    if (numbers.some(isNaN)) {
      throw new CustomError(
        ERROR.NOT_A_NUMBER.message,
        ERROR.NOT_A_NUMBER.name
      );
    }

    const negativeNumbers = numbers.filter((num) => num < 0);
    if (negativeNumbers.length > 0) {
      throw new CustomError(
        ERROR.NEGATIVE_NUMBER.message,
        ERROR.NEGATIVE_NUMBER.name
      );
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
