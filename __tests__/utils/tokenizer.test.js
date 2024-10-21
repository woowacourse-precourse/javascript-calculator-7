import { tokenizer } from '../../src/utils/tokenizer.js';

describe('tokenizer', () => {
  it('구분자를 사용해 문자열을 분리한다.', () => {
    const result = tokenizer('1,2,3', [',']);
    expect(result).toEqual(['1', '2', '3']);
  });

  it('여러 개의 구분자를 사용해 문자열을 분리한다.', () => {
    const result = tokenizer('1,2:3', [',', ':']);
    expect(result).toEqual(['1', '2', '3']);
  });

  it('빈 문자열을 입력할 경우 빈 배열을 반환한다.', () => {
    const result = tokenizer('', [',']);
    expect(result).toEqual([]);
  });

  it('검증을 통과하지 못한 토큰에 대해 에러를 발생시킨다.', () => {
    expect(() => {
      tokenizer('1,-2,3', [','], [() => false]);
    }).toThrow('잘못된 입력 형식이에요.');
  });

  it('모든 토큰이 검증을 통과하면 정상적으로 배열을 반환한다.', () => {
    const result = tokenizer('1,2,3', [','], [() => true, () => true]);
    expect(result).toEqual(['1', '2', '3']);
  });
});
