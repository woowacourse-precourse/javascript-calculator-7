import { filterEmpty, isMatch, isStartsWith, shallowCopy } from '../lib/utils.js';

class Delimiter {
  /** @type {object} */
  #customDelimiterRegEx = /\/\/.*\\n/;

  /** @type {Array<string>} */
  #defaultDelimiters = [',', ':'];

  /** @type {Array<string>} */
  #customDelimiterMatchers = ['//', '\\n'];

  /**
   *
   * @param {string} value
   * @returns {boolean}
   */
  #hasCustomDelimiter(value) {
    return (
      isStartsWith(this.#customDelimiterMatchers[0], value) &&
      isMatch(this.#customDelimiterRegEx, value)
    );
  }

  /**
   *
   * @param {string} value
   * @returns {string}
   */
  #getCustomDelimiter(value) {
    const [start, end] = this.#customDelimiterMatchers;

    return value.split(start)[1].split(end)[0];
  }

  /**
   *
   * @param {string} value
   * @returns {string}
   */
  #removeCustomDelimiterMatchers(value) {
    const [start, end] = this.#customDelimiterMatchers;

    return value.split(start)[1].split(end)[1];
  }

  /**
   *
   * @param {string} value
   * @returns {Array<string>}
   */
  #getDelimiter(value) {
    const delimiter = shallowCopy(this.#defaultDelimiters);

    if (this.#hasCustomDelimiter(value)) {
      delimiter.push(this.#getCustomDelimiter(value));
    }

    return delimiter;
  }

  /**
   *
   * @param {string} delimiter
   * @param {Array<string>} values
   * @returns {Array<string>}
   */
  #delimite(delimiter, values) {
    return values.flatMap((value) => value.split(delimiter));
  }

  /**
   *
   * @param {string} value
   * @returns {Array<string>}
   */
  splitByDelimiters(value) {
    let delimitedString = [value];

    if (this.#hasCustomDelimiter(value)) {
      delimitedString = [this.#removeCustomDelimiterMatchers(value)];
    }

    this.#getDelimiter(value).forEach((delimiter) => {
      delimitedString = this.#delimite(delimiter, delimitedString);
    });

    return filterEmpty(delimitedString);
  }
}

export default Delimiter;
