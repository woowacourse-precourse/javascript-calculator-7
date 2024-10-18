import { isNumericString, isPositiveNumber } from './lib/utils.js';
import SchemaValidator from './lib/SchemaValidator.js';
import Error from './Error.js';

class Validator {
  /** @type {SchemaValidator} */
  #validator;

  constructor(validator) {
    this.#validator = validator;
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
   * @param {Array<string>} values
   * @throws {string}
   */
  validate(values) {
    this.#validator
      .validate(values)
      .with(this.#hasAllowedDelimiters, {
        message: Error.MESSAGE.HAS_NOT_ALLOWED_DELIMITER,
      })
      .with(this.#hasPositiveNumbers, {
        message: Error.MESSAGE.HAS_NEGATIVE_OR_ZERO_NUMBER,
      });
  }
}

export default Validator;
