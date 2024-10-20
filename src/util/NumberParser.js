import { ErrorMessage } from '../domain/Constants.js';

const NumberParser = {
  parseNumbers(stringArray) {
    return stringArray.map(this.parseNumber);
  },

  parseNumber(str) {
    if (str.includes(' ')) {
      throw new Error(ErrorMessage.WHITESPACE);
    }
    const num = Number(str);
    if (isNaN(num)) {
      throw new Error(ErrorMessage.INVALID_NUMBER);
    }
    if (num < 0) {
      throw new Error(ErrorMessage.NEGATIVE_NUMBER);
    }
    return num;
  }
};

export default NumberParser;