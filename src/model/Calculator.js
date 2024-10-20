import {
  DEFAULT_SEPARATORS,
  CUSTOM_SEPARATOR_START,
  CUSTOM_SEPARATOR_END,
} from '../constant/separator.js'
import { ERROR_MESSAGE } from '../constant/error.js'

class Calculator {
  /**
   * @type {Array<string>}
   */
  separators = [];
  value = '';

  /**
   * @param {string} input 
   */
  constructor(input) {
    this.setSeparatorAndValue(input);
  }

  /**
   * @param {string} input
   */
  setSeparatorAndValue(input) {
    const prefixMatch = input.startsWith(CUSTOM_SEPARATOR_START);
    const splitText = input.split(CUSTOM_SEPARATOR_END);
    if (prefixMatch && splitText.length === 2) {
      const customSeparator = splitText[0].replace(CUSTOM_SEPARATOR_START, '');
      this.separators = [...DEFAULT_SEPARATORS, customSeparator];
      this.value = splitText[1];
      return
    }
    this.separators = [...DEFAULT_SEPARATORS];
    this.value = input;
    return
  }

  /**
   * @returns {Array<number>}
   */
  split() {
    return this.separators
      .reduce((inp, sep) => inp.replaceAll(sep, ' '), this.value)
      .split(' ')
      .map(Number);
  }

  /**
   * @param {number} value
   * @returns {boolean}
   */
  validator(value) {
    return Number.isSafeInteger(value) && value > 0;
  }

  /**
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  add(a, b) {
    return a + b;
  }

  /**
   * @returns {number}
   */
  compute() {
    const values = this.split();
    if (!values.every(this.validator)) {
      throw new Error(ERROR_MESSAGE.INVALID_INPUT);
    }
    return values.reduce(this.add);
  }
}

export default Calculator;
