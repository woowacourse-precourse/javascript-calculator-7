import { isMatch } from './utils';

class Calculator {
  /** @type {object} */
  #delimiterRegEx = /\/\/.*\n/;

  /**
   *
   * @param {string} value
   * @returns {boolean}
   */
  #hasDelimiter(value) {
    return isMatch(this.#delimiterRegEx, value);
  }
}

export default Calculator;
