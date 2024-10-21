import { REGEX, ERROR_MESSAGES } from './resources/String.js';

class Parser {
  constructor(inputString) {
    this.inputString = inputString;
    this.inputNums = [];
  }

  handleDefaultDelimiter() {
    if (REGEX.DEFAULT_DELIMITER.test(this.inputString)) {
      const parsedNums = this.inputString.match(/\d+(\.\d+)?/g);
      this.inputNums = parsedNums.map(Number);
      return true;
    }
    return false;
  }

  handleCustomDelimiter() {
    const customDelimiterMatch = this.inputString.match(REGEX.CUSTOM_DELIMITER);

    if (customDelimiterMatch) {
      const customDelimiter = this.escapeRegExp(customDelimiterMatch[1]);
      const delimiterRegex = new RegExp(`[${customDelimiter},:]`);
      const validationRegex = new RegExp(
        `^\\d+(\\.\\d+)?([${customDelimiter},:]\\d+(\\.\\d+)?)*$`,
      );
      /*
       * 커스텀 구분자를 감싸는 '//', '\n'을 제외한 나머지 문자열이
       * 계산을 위한 문자열 형식(validationRegex)에 부합하는지 판단한다.
       */
      if (validationRegex.test(customDelimiterMatch[2])) {
        this.inputString = customDelimiterMatch[2];
      } else {
        throw new Error(ERROR_MESSAGES.INVALID_CALCULATION_STRING);
      }

      const parsedNums = this.inputString.split(delimiterRegex).map(Number);
      this.inputNums = parsedNums;
    } else {
      throw new Error(ERROR_MESSAGES.INVALID_CUSTOM_DELIMITER);
    }
  }

  escapeRegExp(string) {
    return string.replace(REGEX.ESCAPE_SPECIAL_CHARS, '\\$&');
  }

  parse() {
    if (!this.handleDefaultDelimiter()) {
      this.handleCustomDelimiter();
    }
    return this.inputNums;
  }
}

export default Parser;
