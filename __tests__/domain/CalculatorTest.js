import Calculator from '../../src/domain/Calculator';

describe('계산 기능 테스트', () => {
  test('양수로 이루어진 배열을 입력하면 원소의 총합이 반환된다.', () => {
    // given
    const NUMBERS = [1, 2, 3, 4, 5];
    const TOTAL = 15;

    // when
    const sum = new Calculator(NUMBERS).add();

    // then
    expect(sum).toBe(TOTAL);
  });
});
