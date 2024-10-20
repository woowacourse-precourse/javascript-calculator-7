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
      const [customDelimiterPart, numberPart] = this.input.split(CUSTOM_DELIMITER_SEPARATOR);
      
      this.validateCustomDelimiter(customDelimiterPart);
      this.delimiter.push(customDelimiterPart.slice(2));
      this.input = numberPart;
    }
  }

  splitInput() {
    const splitRegexp = new RegExp(`[${this.delimiter.join('')}\n]`);
    return this.input.split(splitRegexp);
  }

  validateInput() {
    this.validateNumberAndDelimiter();
    this.validateNoFirstOrLastDelimiter();
    this.validateNoConsecutiveDelimiter();
  }

  validateCustomDelimiter(customDelimiterPart) {
    this.validateCustomEmptyDelimiter(customDelimiterPart);
    this.validateMultipleCustomDelimiters(customDelimiterPart);
  }

  validateMultipleCustomDelimiters(customDelimiterPart) {
    const customDelimiter = customDelimiterPart.slice(2);
    if (customDelimiter.length > 1) {
      throw new Error(ERROR_MESSAGE.MULTIPLE_CUSTOM_DELIMITERS);
    }
  }
  
  validateNumberAndDelimiter() {
    const isInputValid = new RegExp(`^[0-9${this.delimiter.join('')}\n]*$`);
    if (!isInputValid.test(this.input)) {
      throw new Error(ERROR_MESSAGE.INVALID_INPUT);
    }
  }

  validateCustomEmptyDelimiter(customDelimiter) {
    if(customDelimiter.length === 2) {
      throw new Error(ERROR_MESSAGE.CUSTOM_DELIMITER_EMPTY);
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

  sum(input) {
    return input.map(Number).reduce((acc, cur) => acc + cur, 0);
  }

}