import { isNumericString, isPositiveNumber } from './lib/utils.js';
import SchemaValidator from './lib/SchemaValidator.js';

class Validator {
  /** @type {SchemaValidator} */
  #validator;

  static ERROR_MESSAGE = Object.freeze({
    HAS_NOT_ALLOWED_DELIMITER:
      '[ERROR] 쉼표(,), 콜론(:) 또는 "//"와 "\n" 사이에 위치하는 문자만 구분자로 사용할 수 있어요.',
    HAS_NEGATIVE_OR_ZERO_NUMBER: '[ERROR] 음수나 0은 사용할 수 없어요.',
  });

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
   * @param {Array<string>} value
   * @throws {string}
   */
  validate(value) {
    this.#validator
      .validate(value)
      .with(this.#hasAllowedDelimiters, {
        message: Validator.ERROR_MESSAGE.HAS_NOT_ALLOWED_DELIMITER,
      })
      .with(this.#hasPositiveNumbers, {
        message: Validator.ERROR_MESSAGE.HAS_NEGATIVE_OR_ZERO_NUMBER,
      });
  }
}

export default Validator;
