import Delimiter from './Delimiter.js';
import { isNumericString, isPositiveNumber } from './utils.js';
import SchemaValidator from './lib/SchemaValidator.js';

class Validator {
  /** @type {Delimiter} */
  #delimiter;

  /** @type {SchemaValidator} */
  #validator;

  static ERROR_MESSAGE = Object.freeze({
    HAS_NOT_ALLOWED_DELIMITER:
      '[ERROR] 쉼표(,), 콜론(:) 또는 "//"와 "\n" 사이에 위치하는 문자만 구분자로 사용할 수 있어요.',
    HAS_NEGATIVE_OR_ZERO_NUMBER: '[ERROR] 음수나 0은 사용할 수 없어요.',
  });

  constructor(delimiter, validator) {
    this.#delimiter = delimiter;
    this.#validator = validator;
  }

  #hasAllowedDelimiter(value) {
    return value.every((aValue) => isNumericString(aValue));
  }

  #hasPositiveNumber(value) {
    return value.every((aValue) => isPositiveNumber(aValue));
  }

  validate(value) {
    const delimitedString = this.#delimiter.getDelimitedString(value);

    this.#validator
      .validate(delimitedString)
      .with(this.#hasAllowedDelimiter, {
        message: Validator.ERROR_MESSAGE.HAS_NOT_ALLOWED_DELIMITER,
      })
      .with(this.#hasPositiveNumber, {
        message: Validator.ERROR_MESSAGE.HAS_NEGATIVE_OR_ZERO_NUMBER,
      });
  }
}

export default Validator;
