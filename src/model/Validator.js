import { EMPTY_INPUT_SUM } from '../constants/constants.js';
import {
  ERROR_CUSTOM_DELIMITER_MUST_BE_CHAR,
  ERROR_INVALID_CHARACTER,
  ERROR_INVALID_CUSTOM_DELIM_FORMAT,
  ERROR_NON_NUMERIC_INPUT,
} from '../constants/errorMessage.js';

class Validator {
  static validateInputChars(input) {
    if (!input || input.trim() === '') {
      return EMPTY_INPUT_SUM;
    }
    const invalidChars = /[^0-9,:]/;
    if (invalidChars.test(input)) {
      throw new Error(ERROR_INVALID_CHARACTER);
    }
  }
  static validateIsNumber(input) {
    if (
      !Array.isArray(input) ||
      input.some((num) => typeof num !== 'number' || isNaN(num))
    ) {
      throw new Error(ERROR_NON_NUMERIC_INPUT);
    }
  }
  static validateInputCharsWithCustomDelim(input) {
    if (input.includes('\\n')) {
      const delimiterPart = input.substring(2, input.indexOf('\\n') - 1);
      if (delimiterPart.length > 1) {
        throw new Error(ERROR_CUSTOM_DELIMITER_MUST_BE_CHAR);
      }
    } else {
      throw new Error(ERROR_INVALID_CUSTOM_DELIM_FORMAT);
    }
  }
  static validateNumAfterCustomDelim(cleanInput, delimiter) {
    const invalidChars = new RegExp(`[^0-9${delimiter.source}]`);
    if (invalidChars.test(cleanInput)) {
      throw new Error(ERROR_INVALID_CHARACTER);
    }
  }
}
export default Validator;
