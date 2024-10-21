import { MESSAGES } from './constants.js';

export default class NumberValidator {
  validate(number) {
    if (isNaN(number)) {
      throw new Error(MESSAGES.ERROR_PREFIX + MESSAGES.INVALID_NUMBER);
    }
    if (number < 0) {
      throw new Error(MESSAGES.ERROR_PREFIX + MESSAGES.NEGATIVE_NUMBER);
    }
  }
}