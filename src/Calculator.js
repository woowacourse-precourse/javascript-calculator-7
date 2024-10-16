import { isMatch, shallowCopy } from './utils';

class Calculator {
  /** @type {object} */
  #customDelimiterRegEx = /\/\/.*\n/;

  /** @type {Array<string>} */
  #defaultDelimiter = [',', ':'];

  /**
   *
   * @param {string} value
   * @returns {boolean}
   */
  #hasCustomDelimiter(value) {
    return isMatch(this.#customDelimiterRegEx, value);
  }

  /**
   *
   * @param {string} value
   * @returns {string}
   */
  #getCustomDelimiter(value) {
    return value.split('//')[1].split('\n')[0];
  }

  /**
   *
   * @param {string} value
   * @returns {Array<string>}
   */
  #getDelimiter(value) {
    const delimiter = shallowCopy(this.#defaultDelimiter);

    if (this.#hasCustomDelimiter(value)) {
      delimiter.push(this.#getCustomDelimiter(value));
    }

    return delimiter;
  }
}

export default Calculator;
