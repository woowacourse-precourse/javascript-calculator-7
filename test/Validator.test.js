import Delimiter from '../src/Delimiter';
import Error from '../src/Error';
import SchemaValidator from '../src/lib/SchemaValidator';
import Validator from '../src/Validator';

describe('Validator', () => {
  /** @type {Validator} */
  let validator;

  beforeEach(() => {
    validator = new Validator(new SchemaValidator());
  });

  describe('validate', () => {
    it('기본 구분자 및 커스텀 구분자를 제외한 문자를 가지는 경우 에러를 발생시킨다', () => {
      const value = '//;\\n1]2;3';
      const delimiter = new Delimiter();
      const delimitedString = delimiter.getDelimitedString(value);

      expect(() => validator.validate(delimitedString)).toThrow(
        Error.MESSAGE.HAS_NOT_ALLOWED_DELIMITER,
      );
    });

    it('음수를 가지는 경우 에러를 발생시킨다', () => {
      const value = '//;\\n-1;2;3';
      const delimiter = new Delimiter();
      const delimitedString = delimiter.getDelimitedString(value);

      expect(() => validator.validate(delimitedString)).toThrow(
        Error.MESSAGE.HAS_NEGATIVE_OR_ZERO_NUMBER,
      );
    });

    it('0을 가지는 경우 에러를 발생시킨다', () => {
      const value = '//;\\n0;2;3';
      const delimiter = new Delimiter();
      const delimitedString = delimiter.getDelimitedString(value);

      expect(() => validator.validate(delimitedString)).toThrow(
        Error.MESSAGE.HAS_NEGATIVE_OR_ZERO_NUMBER,
      );
    });
  });
});
