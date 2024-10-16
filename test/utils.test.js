import { isMatch, isNumericString, isPositiveNumber, shallowCopy } from '../src/utils';

describe('utils', () => {
  describe('isMatch', () => {
    it('문자열에 정규표현식과 일치하는 패턴이 있을 경우 true를 반환한다', () => {
      const regEx = /\/\/.*\n/;
      const value = '//;\n1;2;3';

      const result = isMatch(regEx, value);

      expect(result).toBe(true);
    });

    it('문자열에 정규표현식과 일치하는 패턴이 없을 경우 false를 반환한다', () => {
      const regEx = /\/\/.*\n/;
      const value = '1;2;3';

      const result = isMatch(regEx, value);

      expect(result).toBe(false);
    });
  });

  describe('shallowCopy', () => {
    it('배열을 입력 받은 경우 얕은 복사를 진행한 배열을 반환한다.', () => {
      const array = [1, 2, 3];

      const result = shallowCopy(array);

      expect(result).not.toBe(array);
    });

    it('객체를 입력 받은 경우 얕은 복사를 진행한 객체를 반환한다.', () => {
      const object = { first: 1, second: 2, third: 3 };

      const result = shallowCopy(object);

      expect(result).not.toBe(object);
    });
  });

  describe('isNumericString', () => {
    it('문자열을 숫자로 변환 가능한 경우 true를 반환한다', () => {
      const value = '123';

      const result = isNumericString(value);

      expect(result).toBe(true);
    });

    it('문자열을 숫자로 변환 불가한 경우 false를 반환한다', () => {
      const value = 'woowacourse';

      const result = isNumericString(value);

      expect(result).toBe(false);
    });
  });

  describe('isPositiveNumber', () => {
    describe('주어진 변수가 문자열인 경우', () => {
      it('숫자로 변환하여 결과를 반환한다.', () => {
        const value = '123';

        const result = isPositiveNumber(value);

        expect(result).toBe(true);
      });
    });

    describe('주어진 변수가 숫자인 경우', () => {
      it('양수인 경우 true를 반환한다', () => {
        const value = 123;

        const result = isPositiveNumber(value);

        expect(result).toBe(true);
      });

      it('음수인 경우 false를 반환한다', () => {
        const value = -123;

        const result = isPositiveNumber(value);

        expect(result).toBe(false);
      });

      it('0인 경우 false를 반환한다', () => {
        const value = 0;

        const result = isPositiveNumber(value);

        expect(result).toBe(false);
      });
    });
  });
});
