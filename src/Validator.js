import { MESSAGE, REGEX } from './constant.js';

class Validator {
  handleError(message) {
    throw new Error(`[ERROR] ${message}`);
  }

  validateInputFormat(input) {
    if (!input.trim()) return;

    if (input.startsWith('//')) {
      this.CustomDelimiterFormat(input);
    } else {
      this.DefaultFormat(input);
    }
  }

  CustomDelimiterFormat(input) {
    if (!REGEX.FULL.test(input)) {
      this.handleError(MESSAGE.INVALID_CUSTOM_DELIMITER_FORMAT);
    }
  }

  DefaultFormat(input) {
    if (!REGEX.DEFAULT.test(input)) {
      this.handleError(MESSAGE.INVALID_FORMAT);
    }
  }
}

export default Validator;
