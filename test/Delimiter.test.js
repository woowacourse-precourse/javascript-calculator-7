import Delimiter from '../src/app/Delimiter';

describe('Delimiter', () => {
  /** @type {Delimiter} */
  let delimiter;

  beforeEach(() => {
    delimiter = new Delimiter();
  });

  describe('splitByDelimiters', () => {
    describe('커스텀 구분자가 없는 경우', () => {
      it('기본 구분자를 사용하여 입력한 문자열을 구분한 값을 반환한다', () => {
        const value = '1,2:,3,4:56';

        const result = delimiter.splitByDelimiters(value);

        expect(result).toEqual(['1', '2', '3', '4', '56']);
      });
    });

    describe('커스텀 구분자가 있는 경우', () => {
      it('커스텀 구분자를 포함하여 입력한 문자열을 구분한 값을 반환한다', () => {
        const value = '//;\\n1,2:,3,4;56';

        const result = delimiter.splitByDelimiters(value);

        expect(result).toEqual(['1', '2', '3', '4', '56']);
      });
    });
  });
});
