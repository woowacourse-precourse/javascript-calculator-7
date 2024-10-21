import CalculatorService from '../src/CalculatorService.js';

describe('서비스 로직 테스트', () => {
  test('주어진 숫자배열을 기반으로 덧셈을 수행할 수 있다.', () => {
    const input = [1, 2, 3, 4, 5];
    const expected = 1 + 2 + 3 + 4 + 5;
    const result = CalculatorService.calculate(input);

    expect(result).toEqual(expected);
  });
});
