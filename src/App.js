import { Console } from "@woowacourse/mission-utils";

const ERROR = {
  INVALID_INPUT: {
    name: "InvalidInputError",
    message: "유효하지 않은 입력입니다. 기본 구분자가 필요합니다.",
  },
  EMPTY_STRING: {
    name: "EmptyStringError",
    message: "빈 문자열을 입력할 수 없습니다.",
  },
  MISMATCHED_DELIMITER: {
    name: "MismatchedDelimiterError",
    message: "입력한 구분자와 일치하지 않는 구분자가 포함되어 있습니다.",
  },
  NOT_A_NUMBER: {
    name: "NotANumberError",
    message: "숫자가 아닌 값이 포함되어 있습니다.",
  },
};

class CustomError extends Error {
  constructor(message, name) {
    super(message);
    this.name = name;
  }
}

class App {
  async run() {
    try {
      const input = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );
      const result = this.calculateSum(input);
      Console.print(`결과: ${result}`);
    } catch (error) {
      Console.print(`[ERROR] ${error.name}: ${error.message}`);
    }
  }

  calculateSum(input) {
    this.validateInput(input);
    let numberString = input;
    const customDelimiter = this.extractCustomDelimiter(input);

    if (customDelimiter) {
      numberString = this.getNumberString(input, customDelimiter);
      this.checkForMismatchedDelimiter(numberString, customDelimiter);
    } else {
      this.checkForDefaultDelimiter(numberString);
    }

    const numbers = this.parseNumbers(numberString, customDelimiter);
    this.validateNumbers(numbers);

    return numbers.reduce((sum, num) => sum + num, 0);
  }

  validateInput(input) {
    if (!input) {
      throw new CustomError(
        ERROR.EMPTY_STRING.message,
        ERROR.EMPTY_STRING.name
      );
    }
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
