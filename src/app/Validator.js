import { isNumericString, isPositiveNumber } from '../lib/utils.js';
import SchemaValidator from '../lib/SchemaValidator.js';
import Error from './Error.js';
import Delimiter from './Delimiter.js';

class Validator {
  /** @type {SchemaValidator} */
  #validator;

  /** @type {Delimiter} */
  #delimiter;

  /**
   *
   * @param {SchemaValidator} validator
   * @param {Delimiter} delimiter
   */
  constructor(validator, delimiter) {
    this.#validator = validator;
    this.#delimiter = delimiter;
  }

  /**
   *
   * @param {Array<string>} values
   * @returns {boolean}
   */
  #hasAllowedDelimiters(values) {
    return values.every((value) => isNumericString(value));
  }

  /**
   *
   * @param {Array<string>} values
   * @returns {boolean}
   */
  #hasPositiveNumbers(values) {
    return values.every((value) => isPositiveNumber(value));
  }

  /**
   *
   * @param {string} value
   * @returns {boolean}
   */
  #hasValidCustomDelimiter(value) {
    if (this.#delimiter.hasCustomDelimiter(value)) {
      return !isNumericString(this.#delimiter.getCustomDelimiter(value));
    }

    return true;
  }

  /**
   *
   * @param {string} value
   * @throws {string}
   */
  #validateDelimiter(value) {
    this.#validator.validate(value).with(this.#hasValidCustomDelimiter.bind(this), {
      message: Error.MESSAGE.CUSTOM_DELIMITER_IS_NOT_NUMBER,
    });
  }

  /**
   *
   * @param {Array<string>} values
   * @throws {string}
   */
  #validateDelimited(values) {
    this.#validator
      .validate(values)
      .with(this.#hasAllowedDelimiters, {
        message: Error.MESSAGE.HAS_NOT_ALLOWED_DELIMITER,
      })
      .with(this.#hasPositiveNumbers, {
        message: Error.MESSAGE.HAS_NEGATIVE_OR_ZERO_NUMBER,
      });
  }

  /**
   *
   * @param {string} value
   * @throws {string}
   */
  validate(value) {
    this.#validateDelimiter(value);

    const delimitedValues = this.#delimiter.splitByDelimiters(value);
    this.#validateDelimited(delimitedValues);
  }
}

export default Validator;
