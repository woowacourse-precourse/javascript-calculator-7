import { isMatch } from '../src/utils';

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
});
