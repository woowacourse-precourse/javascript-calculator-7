import {
  findCustomDelimiter,
  splitWithCustomDelimiter,
} from '../src/utils/split.js';

const mockValidation = jest.fn();

describe('커스텀 구분자 탐색', () => {
  it('커스텀 구분자가 없는 경우 null과 숫자 문자열을 반환해야 한다', () => {
    const result = findCustomDelimiter('1,2,3', [mockValidation]);
    expect(result).toEqual({
      customDelimiter: null,
      numberStr: '1,2,3',
    });
    expect(mockValidation).not.toHaveBeenCalled();
  });

  it('커스텀 구분자와 숫자 문자열을 올바르게 추출해야 한다', () => {
    const result = findCustomDelimiter('//;\\n1;2;3', [mockValidation]);
    expect(result).toEqual({
      customDelimiter: ';',
      numberStr: '1;2;3',
    });
    expect(mockValidation).toHaveBeenCalledWith(';');
  });

  it('모든 검증 함수가 커스텀 구분자와 함께 호출되어야 한다', () => {
    const customValidation1 = jest.fn();
    const customValidation2 = jest.fn();
    findCustomDelimiter('//;\\n1;2;3', [customValidation1, customValidation2]);
    expect(customValidation1).toHaveBeenCalledWith(';');
    expect(customValidation2).toHaveBeenCalledWith(';');
  });
});

describe('커스텀 구분자로 숫자 문자열 분할', () => {
  it('커스텀 구분자가 없는 경우 기본 구분자로 숫자 문자열을 분할해야 한다', () => {
    const result = splitWithCustomDelimiter(null, '1,2:3', [mockValidation]);
    expect(result).toEqual([BigInt(1), BigInt(2), BigInt(3)]);
    expect(mockValidation).toHaveBeenCalledWith(['1', '2', '3']);
  });

  it('제공된 커스텀 구분자로 숫자 문자열을 분할해야 한다', () => {
    const result = splitWithCustomDelimiter(';', '1;2;3', [mockValidation]);
    expect(result).toEqual([BigInt(1), BigInt(2), BigInt(3)]);
    expect(mockValidation).toHaveBeenCalledWith(['1', '2', '3']);
  });

  it('숫자 배열에 대해 주입된 검증 함수가 모두 호출되어야 한다', () => {
    const numberValidation1 = jest.fn();
    const numberValidation2 = jest.fn();
    splitWithCustomDelimiter(';', '1;2;3', [
      numberValidation1,
      numberValidation2,
    ]);
    expect(numberValidation1).toHaveBeenCalledWith(['1', '2', '3']);
    expect(numberValidation2).toHaveBeenCalledWith(['1', '2', '3']);
  });

  it('기본 구분자와 커스텀 구분자를 모두 사용해야 한다', () => {
    const result = splitWithCustomDelimiter(';', '1,2;3:4', [mockValidation]);
    expect(result).toEqual([BigInt(1), BigInt(2), BigInt(3), BigInt(4)]);
    expect(mockValidation).toHaveBeenCalledWith(['1', '2', '3', '4']);
  });
});
