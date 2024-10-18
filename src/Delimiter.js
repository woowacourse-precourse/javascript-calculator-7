import { isMatch, shallowCopy } from './lib/utils.js';

class Delimiter {
  /** @type {object} */
  #customDelimiterRegEx = /\/\/.*\\n/;

  /** @type {Array<string>} */
  #defaultDelimiter = [',', ':'];

  /** @type {Array<string>} */
  #defaultDelimiterMatcher = ['//', '\\n'];

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
    return value.split('//')[1].split('\\n')[0];
  }

  /**
   *
   * @param {string} value
   * @returns {Array<string>}
   */
  #getDelimiter(value) {
    const delimiter = shallowCopy(this.#defaultDelimiter);

    if (this.#hasCustomDelimiter(value)) {
      delimiter.unshift(this.#getCustomDelimiter(value));
      delimiter.unshift(...this.#defaultDelimiterMatcher);
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
   * @param {Array<string>} value
   * @returns {Array<string>}
   */
  #filterEmpty(value) {
    return value.filter((aValue) => aValue !== '');
  }

  /**
   *
   * @param {string} value
   * @returns {Array<string>}
   */
  getDelimitedString(value) {
    let delimitedString = [value];

    this.#getDelimiter(value).forEach((delimiter) => {
      delimitedString = this.#delimite(delimiter, delimitedString);
    });

    return this.#filterEmpty(delimitedString);
  }
}

export default Delimiter;
