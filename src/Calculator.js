import { ERROR_MESSAGE } from './constants/error.js';

const CUSTOM_DELIMITER_PREFIX = '//';
const CUSTOM_DELIMITER_SEPARATOR = '\\n';
const DEFAULT_DELIMITERS = [',', ':'];

export default class Calculator {
  constructor(input) {
    this.input = input;
    this.delimiter = [...DEFAULT_DELIMITERS];
  }

  calculate() {
    this.parseCustomDelimiter();
    this.validateInput();

    const input = this.splitInput();
    return this.sum(input);
  }

  parseCustomDelimiter() {
    if (this.input.startsWith(CUSTOM_DELIMITER_PREFIX)) {
      const [customDelimiter, numberPart] = this.input.split(CUSTOM_DELIMITER_SEPARATOR)
      this.delimiter.push(customDelimiter.slice(2));
      this.input = numberPart;
    }
  }

  validateInput() {
    this.validateNumberAndDelimiter();
    this.validateNoFirstOrLastDelimiter();
    this.validateNoConsecutiveDelimiter();
  }

  validateNumberAndDelimiter() {
    const isInputValid = new RegExp(`^[0-9${this.delimiter.join('')}\n]*$`);
    if (!isInputValid.test(this.input)) {
      throw new Error(ERROR_MESSAGE.INVALID_INPUT);
    }
  }

  validateNoFirstOrLastDelimiter() {
    for (let i=0; i<this.delimiter.length; i++) {
      if (this.input.startsWith(this.delimiter[i]) || this.input.endsWith(this.delimiter[i])) {
        throw new Error(ERROR_MESSAGE.END_WITH_DELIMITER);
      }
    }
  }  

  validateNoConsecutiveDelimiter() {
    const isConsecutiveDelimiter = new RegExp(`[${this.delimiter.join('')}]{2,}`);
    
    if (isConsecutiveDelimiter.test(this.input)) {
      throw new Error(ERROR_MESSAGE.CONSECUTIVE_DELIMITER);
    }
  }

  splitInput() {
    const splitRegexp = new RegExp(`[${this.delimiter.join('')}\n]`)
    return this.input.split(splitRegexp);
  }

  sum(input) {
    return input.map(Number).reduce((acc, cur) => acc + cur, 0);
  }

}