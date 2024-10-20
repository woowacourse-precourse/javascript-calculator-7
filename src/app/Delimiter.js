import {
  filterEmpty,
  findCapturedValue,
  isMatch,
  isStartsWith,
  shallowCopy,
} from '../lib/utils.js';

class Delimiter {
  /** @type {Array<string>} */
  #defaultDelimiters = [',', ':'];

  /** @type {object} */
  #customDelimiterFormatRegEx = /\/\/.*\\n/;

  /** @type {object} */
  #customDelimiterRegEx = /\/\/(.*?)\\n/;

  /** @type {Array<string>} */
  #customDelimiterMatchers = ['//', '\\n'];

  /**
   *
   * @param {string} value
   * @returns {boolean}
   */
  hasCustomDelimiter(value) {
    return (
      isStartsWith(this.#customDelimiterMatchers[0], value) &&
      isMatch(this.#customDelimiterFormatRegEx, value)
    );
  }

  /**
   *
   * @param {string} value
   * @returns {string}
   */
  getCustomDelimiter(value) {
    return findCapturedValue(this.#customDelimiterRegEx, value);
  }

  /**
   *
   * @param {string} value
   * @returns {Array<number>}
   */
  #getCustomDelimiterMatcherLocation(value) {
    return [
      value.indexOf(this.#customDelimiterMatchers[0]),
      value.indexOf(this.#customDelimiterMatchers[1]),
    ];
  }

  /**
   *
   * @param {string} value
   * @returns {string}
   */
  #removeCustomDelimiterFormat(value) {
    const [_, end] = this.#getCustomDelimiterMatcherLocation(value);

    return value.slice(end + 2);
  }

  /**
   *
   * @param {string} value
   * @returns {object}
   */
  #getDelimiterRegEx(value) {
    const delimiters = shallowCopy(this.#defaultDelimiters);

    if (this.hasCustomDelimiter(value)) {
      delimiters.push(this.getCustomDelimiter(value));
    }

    return new RegExp(`[${delimiters.join('')}]`);
  }

  /**
   *
   * @param {object} delimiterRegEx
   * @param {string} value
   * @returns {Array<string>}
   */
  #delimite(delimiterRegEx, value) {
    return value.split(delimiterRegEx);
  }

  /**
   *
   * @param {string} value
   * @returns {Array<string>}
   */
  splitByDelimiters(value) {
    const delimiterRegEx = this.#getDelimiterRegEx(value);
    const delimiteValue = this.hasCustomDelimiter(value)
      ? this.#removeCustomDelimiterFormat(value)
      : value;

    return filterEmpty(this.#delimite(delimiterRegEx, delimiteValue));
  }
}

export default Delimiter;
