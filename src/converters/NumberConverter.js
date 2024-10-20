import { ERROR_MESSAGES } from '../constants.js';
import IConverter from '../interfaces/IConverter.js';

class NumberConverter extends IConverter {
  static convertToNumber(value) {
    if (isNaN(value)) {
      throw new Error(ERROR_MESSAGES.INVALID_NUMBER_INPUT);
    }
    return Number(value);
  }

  static validate(number) {
    if (number < 0) {
      throw new Error(ERROR_MESSAGES.NEGATIVE_NUMBER_NOT_ALLOWED);
    }
  }

  convertAndValidate(values) {
    const numbers = values.map((number) => {
      const num = NumberConverter.convertToNumber(number);
      NumberConverter.validate(num);

      return num;
    });

    return numbers;
  }
}

export default NumberConverter;
