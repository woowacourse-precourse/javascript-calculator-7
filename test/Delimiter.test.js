import Delimiter from '../src/app/Delimiter';

describe('Delimiter', () => {
  /** @type {Delimiter} */
  let delimiter;

  beforeEach(() => {
    delimiter = new Delimiter();
  });

  describe('hasCustomDelimiter', () => {
    it('커스텀 구분자를 가진 경우 true를 반환한다', () => {
      const value = '//;\\n1;2;3';

      const result = delimiter.hasCustomDelimiter(value);

      expect(result).toBe(true);
    });

    it('커스텀 구분자가 없는 경우 false를 반환한다', () => {
      const value = '1;2;3';

      const result = delimiter.hasCustomDelimiter(value);

      expect(result).toBe(false);
    });
  });

  describe('getCustomDelimiter', () => {
    it('커스텀 구분자가 존재하는 경우 커스텀 구분자를 반환한다', () => {
      const value = '//;\\n1;2;3';

      const result = delimiter.getCustomDelimiter(value);

      expect(result).toBe(';');
    });

    it('커스텀 구분자가 존재하지 않는 경우 null을 반환한다', () => {
      const value = '1;2;3';

      const result = delimiter.getCustomDelimiter(value);

      expect(result).toBe(null);
    });
  });

  describe('delimite', () => {
    describe('커스텀 구분자가 없는 경우', () => {
      it('기본 구분자를 사용하여 입력한 문자열을 구분한 값을 반환한다', () => {
        const value = '1,2:,3,4:56';

        const result = delimiter.delimite(value);

        expect(result).toEqual(['1', '2', '3', '4', '56']);
      });
    });

    describe('커스텀 구분자가 있는 경우', () => {
      it('커스텀 구분자를 포함하여 입력한 문자열을 구분한 값을 반환한다', () => {
        const value = '//;\\n1,2:,3,4;56';

        const result = delimiter.delimite(value);

        expect(result).toEqual(['1', '2', '3', '4', '56']);
      });
    });
  });
});
