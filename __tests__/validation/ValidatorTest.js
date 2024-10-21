import Validator from '../../src/validation/Validator.js';
import { ERROR_MESSAGE } from "../../src/constant/MESSAGE.js";
import { DEFAULT_DELIMITERS } from "../../src/constant/DELIMITER.js";

describe('Validator', () => {
  let validator;

  beforeEach(() => {
    validator = new Validator();
  });

  describe('validateCustomDelimiter', () => {
    test('유효한 커스텀 구분자에 대한 예외 발생 여부 확인', () => {
      const correctDelimiters = [';', '\\', 'a', 'A', '가', ' '];
      correctDelimiters.forEach(delimiter => {
        expect(() => validator.validateCustomDelimiter(delimiter)).not.toThrow();
      });      
    });

    test('null 값에 대한 유효성 확인', () => {
      expect(() => validator.validateCustomDelimiter(null)).not.toThrow();
    });

    test('숫자 구분자에 대한 예외 발생 확인', () => {
      const numberDelimiters = ['1', 1, '0', 0, '10', -1, '-1'];
      numberDelimiters.forEach(delimiter => {
        expect(() => validator.validateCustomDelimiter(delimiter))
        .toThrow(ERROR_MESSAGE.INVALID_NUMBER_DELIMITER);
      });
    });

    test('기본 구분자(,:)에 대한 예외 발생 확인', () => {
      Object.values(DEFAULT_DELIMITERS).forEach(delimiter => {
        expect(() => validator.validateCustomDelimiter(delimiter))
          .toThrow(ERROR_MESSAGE.INVALID_DEFAULT_DELIMITER);
      });
    });
  });
});
