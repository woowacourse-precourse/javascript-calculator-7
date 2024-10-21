import NumberSplitter from '../../src/application/parser/NumberSplitter.js';

describe('NumberSplitter', () => {
  let numberSplitter;

  beforeEach(() => {
    numberSplitter = new NumberSplitter();
  });

  describe('split 메소드', () => {
    test('기본 구분자로 문자열을 분리하고 숫자 배열 반환 확인', () => {
      const result = numberSplitter.split([',', ':'], '1,2:3');
      expect(result).toEqual([1, 2, 3]);
    });

    test('여러 구분자로 문자열을 분리하고 숫자 배열 반환 확인', () => {
      const result = numberSplitter.split([',', ':', ';'], '1,2:3;4');
      expect(result).toEqual([1, 2, 3, 4]);
    });

    test('연속된 구분자 처리 확인', () => {
      const result = numberSplitter.split([',', ':'], '1,,2::3');
      expect(result).toEqual([1, 2, 3]);
    });

    test('빈 문자열 입력 시 빈 배열 반환 확인', () => {
      const result = numberSplitter.split([',', ':'], '');
      expect(result).toEqual([]);
    });

    test('구분자만 있는 문자열 입력 시 빈 배열 반환 확인', () => {
      const result = numberSplitter.split([',', ':'], ',:,:');
      expect(result).toEqual([]);
    });

    test('큰 숫자 처리 확인', () => {
      const result = numberSplitter.split([','], '1000000000000,200000000000,30000000000');
      expect(result).toEqual([1000000000000,200000000000,30000000000]);
    });

  });
});