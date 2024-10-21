import { validators } from '../../src/utils/validators.js';

describe('validators', () => {
  describe('isNumber', () => {
    it('숫자 문자열을 숫자로 인식한다.', () => {
      expect(validators.isNumber('123')).toBe(true);
    });

    it('부동소수점 숫자를 숫자로 인식한다.', () => {
      expect(validators.isNumber('123.45')).toBe(true);
    });

    it('음수 숫자 문자열을 숫자로 인식한다.', () => {
      expect(validators.isNumber('-123')).toBe(true);
    });

    it('숫자가 아닌 문자열을 인식하지 못한다.', () => {
      expect(validators.isNumber('abc')).toBe(false);
    });

    it('공백 문자열을 숫자로 인식하지 않는다.', () => {
      expect(validators.isNumber('')).toBe(false);
    });

    it('null이나 undefined는 숫자로 인식하지 않는다.', () => {
      expect(validators.isNumber(null)).toBe(false);
      expect(validators.isNumber(undefined)).toBe(false);
    });
  });

  describe('isPositiveNumber', () => {
    it('양수 숫자 문자열을 양수로 인식한다.', () => {
      expect(validators.isPositiveNumber('123')).toBe(true);
    });

    it('부동소수점 양수 숫자를 양수로 인식한다.', () => {
      expect(validators.isPositiveNumber('123.45')).toBe(true);
    });

    it('음수 숫자 문자열은 양수로 인식하지 않는다.', () => {
      expect(validators.isPositiveNumber('-123')).toBe(false);
    });

    it('숫자가 아닌 문자열은 양수로 인식하지 않는다.', () => {
      expect(validators.isPositiveNumber('abc')).toBe(false);
    });

    it('0은 양수로 인식하지 않는다.', () => {
      expect(validators.isPositiveNumber('0')).toBe(false);
    });

    it('공백 문자열을 양수로 인식하지 않는다.', () => {
      expect(validators.isPositiveNumber('')).toBe(false);
    });

    it('null이나 undefined는 양수로 인식하지 않는다.', () => {
      expect(validators.isPositiveNumber(null)).toBe(false);
      expect(validators.isPositiveNumber(undefined)).toBe(false);
    });
  });
});
