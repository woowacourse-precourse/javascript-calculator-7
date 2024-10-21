import { DEFAULT_DELIMITERS } from '../constant/DELIMITER.js';
import { ERROR_MESSAGE } from '../constant/MESSAGE.js';

export default class Validator {
  static validateNumberString(numberString, delimiters) {
    for (const char of numberString) {
      if (!delimiters.includes(char) && isNaN(parseInt(char, 10))) {
        throw new Error(`${ERROR_MESSAGE.INVALID_INPUT}${ERROR_MESSAGE.INVALID_EXAMPLE}`);
      }
    }
  }

  static validateCustomDelimiter(customDelimiter) {
    if (customDelimiter === null) {
      return;
    }
    if (!isNaN(parseInt(customDelimiter, 10))) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_DELIMITER);
    }
    if (Object.values(DEFAULT_DELIMITERS).includes(customDelimiter)) {
      throw new Error(ERROR_MESSAGE.INVALID_DEFAULT_DELIMITER);
    }
  }
}
