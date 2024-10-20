import { ERROR_MESSAGE } from '../constants/index.js';

export default class Calculator {
  hasCustomPrefixSeparator(string) {
    return /^\/\/.+\\n.*/.test(string);
  }

  extractSeparator(string) {
    const seperators = string.split(/\/\/|\\n/);
    return seperators[1];
  }

  convertArray(input, separator) {
    const string = input.replace(/^\/\/.+\\n/, '');
    const defaultArray = string.split(/,|;/);
    return defaultArray.flatMap((item) => item.split(separator));
  }

  validate(array) {
    if (array.some((item) => item === '')) {
      throw Error(ERROR_MESSAGE.noNumberBetweenSeparator);
    }

    if (array.some((item) => Number(item) <= 0)) {
      throw Error(ERROR_MESSAGE.allowPositiveNumber);
    }

    if (array.some((item) => Number.isNaN(Number(item)))) {
      throw Error(ERROR_MESSAGE.noNumberBetweenSeparator);
    }
  }
}
