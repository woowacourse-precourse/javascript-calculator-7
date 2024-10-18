import { ERROR_MESSAGE } from './constants/error.js';

export default class Calculator {
  constructor(input) {
    this.input = input;
    this.delimiter = [',', ':'];
  }

  validateInput() {
    const isInputValid = new RegExp(`^[0-9${this.delimiter.join('')}\n]*$`);
    if (!isInputValid.test(this.input)) {
      throw new Error(ERROR_MESSAGE.INVALID_INPUT);
    }

  }

  customDelimiter() {
    if (this.input.startsWith('//')) {
      const [customDelimiter, numberPart] = this.input.split('\\n')
      this.delimiter.push(customDelimiter.slice(2));
      this.input = numberPart;
    }
  }

  calculate() {
    this.customDelimiter();

    this.validateInput();

    const input = this.input.split(new RegExp(`[${this.delimiter.join('')}\n]`));

    const sum = input.map(Number).reduce((acc, cur) => acc + cur, 0);
    return sum;
  }


}