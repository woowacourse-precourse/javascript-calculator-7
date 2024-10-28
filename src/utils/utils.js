import { CAR_NAME_LENGTH_LIMIT } from '../constants/constant.js';

export const utils = {
  hasValidCharacter(name) {
    const regex = /^[\p{L},\s]*$/u;
    return regex.test(name);
  },
  isNameLengthLimit(name) {
    return name.length <= CAR_NAME_LENGTH_LIMIT;
  },
  hasWhitespace(name) {
    const regex = /\s/;
    return regex.test(name);
  },
  isNumberType(number) {
    return !isNaN(number);
  },
  isNegativeNumber(number) {
    return number < 0;
  },
};
