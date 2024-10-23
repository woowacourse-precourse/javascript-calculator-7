import {
  DEFAULT_SEPARATORS,
  CUSTOM_SEPARATOR_START,
  CUSTOM_SEPARATOR_END,
} from '../constant/separator.js';
import { ERROR_MESSAGE } from '../constant/error.js';

class Calculator {
  /**
   * @type {Array<string>}
   */
  _separators = [];
  _value = '';

  /**
   * @param {string | undefined} input
   */
  constructor(input) {
    if (input) this.init(input);
  }

  /**
   * @param {string} value
   * @returns {void}
   */
  setValue(value) {
    this._value = value;
  }

  /**
   * @param {Array<string>} separators
   * @returns {void}
   */
  setSeparators(separators) {
    this._separators = separators;
  }

  /**
   * @param {string} input
   * @returns {void}
   */
  init(input) {
    const prefixMatch = input.startsWith(CUSTOM_SEPARATOR_START);
    const splitText = input.split(CUSTOM_SEPARATOR_END);
    if (prefixMatch && splitText.length === 2) {
      const customSeparator = splitText[0].replace(CUSTOM_SEPARATOR_START, '');
      this.setSeparators([...DEFAULT_SEPARATORS, customSeparator]);
      this.setValue(splitText[1]);
      return;
    }
    this.setSeparators([...DEFAULT_SEPARATORS]);
    this.setValue(input);
    return;
  }

  /**
   * @returns {Array<number>}
   */
  getValues() {
    return this._separators
      .reduce((inp, sep) => inp.replaceAll(sep, ' '), this._value)
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
    const values = this.getValues();
    if (!values.every(this.validator)) {
      throw new Error(ERROR_MESSAGE.INVALID_INPUT);
    }
    return values.reduce(this.add);
  }
}

export default Calculator;
