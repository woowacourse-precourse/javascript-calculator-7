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

  /**
   *
   * @param {string} delimiter
   * @param {Array<string>} value
   * @returns {Array<string>}
   */
  #delimite(delimiter, value) {
    return value.flatMap((aValue) => aValue.split(delimiter));
  }

  /**
   *
   * @param {string} value
   * @returns {Array<string>}
   */
  #getDelimitedString(value) {
    let delimitedString = [value];

    this.#getDelimiter(value).forEach((delimiter) => {
      delimitedString = this.#delimite(delimiter, delimitedString);
    });

    return delimitedString;
  }
}

export default Calculator;
