import { isMatch, shallowCopy } from '../src/utils';

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
});
