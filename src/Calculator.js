import {
  splitBySeparator,
  findCustomSeparator,
} from './utils/separatorHelpers.js';

export default class Calculator {
  constructor(input) {
    this.input = input;
    this.separator = this.determine();
  }

  determine() {
    const customSeparator = findCustomSeparator(this.input);

    return customSeparator ? ['//', '\\n', customSeparator] : [',', ':'];
  }

  sum() {
    const splitedArr = splitBySeparator(this.separator, this.input);

    return splitedArr.reduce((num, acc) => num + acc);
  }
}
