import { ERROR_MESSAGES } from './constants/Message.js';
import { SYMBOL } from './constants/Symbol.js';

const validator = separatedValue => {
  separatedValue.forEach(value => {
    if (value.trim() === SYMBOL.empty) {
      throw new Error(ERROR_MESSAGES.empty_value_between_delimiter);
    }
    const number = Number(value.trim());

    if (Number.isNaN(number)) {
      throw new Error(ERROR_MESSAGES.invalid_input);
    }

    if (number <= SYMBOL.zero) {
      throw new Error(ERROR_MESSAGES.not_positive_number);
    }
  });
};

export default validator;
