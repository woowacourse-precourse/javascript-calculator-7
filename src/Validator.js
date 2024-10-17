import Delimiter from './Delimiter.js';
import { isNumericString } from './utils.js';
import SchemaValidator from './lib/SchemaValidator.js';

class Validator {
  /** @type {Delimiter} */
  #delimiter;

  /** @type {SchemaValidator} */
  #validator;

  static ERROR_MESSAGE = Object.freeze({
    HAS_NOT_ALLOWED_DELIMITER:
      '[ERROR] 쉼표(,), 콜론(:) 또는 "//"와 "\n" 사이에 위치하는 문자만 구분자로 사용할 수 있어요.',
  });

  constructor(delimiter, validator) {
    this.#delimiter = delimiter;
    this.#validator = validator;
  }

  #hasAllowedDelimiter(value) {
    return value.every((aValue) => isNumericString(aValue));
  }

  validate(value) {
    const delimitedString = this.#delimiter.getDelimitedString(value);

    this.#validator.validate(delimitedString).with(this.#hasAllowedDelimiter, {
      message: Validator.ERROR_MESSAGE.HAS_NOT_ALLOWED_DELIMITER,
    });
  }
}

export default Validator;
