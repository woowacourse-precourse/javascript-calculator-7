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
  #customDelimiterFormatRegEx = /\/\/.*?\\n/;

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
   * @returns {string | null}
   */
  getCustomDelimiter(value) {
    return findCapturedValue(this.#customDelimiterRegEx, value);
  }

  /**
   *
   * @param {string} value
   * @returns {{ start: number; end: number }}
   */
  #getCustomDelimiterMatcherLocation(value) {
    return {
      start: value.indexOf(this.#customDelimiterMatchers[0]),
      end: value.indexOf(this.#customDelimiterMatchers[1]),
    };
  }

  /**
   *
   * @returns {{ start: number; end: number; }}
   */
  #getCustomDelimiterMatcherLength() {
    return {
      start: this.#customDelimiterMatchers[0].length,
      end: this.#customDelimiterMatchers[1].length,
    };
  }

  /**
   *
   * @param {string} value
   * @returns {string}
   */
  #removeCustomDelimiterFormat(value) {
    return value.slice(
      this.#getCustomDelimiterMatcherLocation(value).end +
        this.#getCustomDelimiterMatcherLength().end,
    );
  }

  /**
   *
   * @param {string} value
   * @returns {Array<string>}
   */
  #getDelimiters(value) {
    const delimiters = shallowCopy(this.#defaultDelimiters);

    if (this.hasCustomDelimiter(value)) {
      delimiters.push(this.getCustomDelimiter(value));
    }

    return delimiters;
  }

  /**
   *
   * @param {string} value
   * @returns {object}
   */
  #getDelimiterRegEx(value) {
    return new RegExp(`[${this.#getDelimiters(value).join('')}]`);
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
   * @returns {string}
   */
  #selectDelimiterValue(value) {
    if (this.hasCustomDelimiter(value)) {
      return this.#removeCustomDelimiterFormat(value);
    }

    return value;
  }

  /**
   *
   * @param {string} value
   * @returns {Array<string>}
   */
  splitByDelimiters(value) {
    return filterEmpty(
      this.#delimite(this.#getDelimiterRegEx(value), this.#selectDelimiterValue(value)),
    );
  }
}

export default Delimiter;
