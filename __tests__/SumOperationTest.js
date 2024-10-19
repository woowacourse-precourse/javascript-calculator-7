import SumOperation from '../src/operations/SumOperation';

describe('SumOperation', () => {
  test('숫자 배열의 합을 올바르게 계산한다', () => {
    const numbers = [1, 2, 3, 4, 5];

    const operation = new SumOperation();
    const result = operation.calculate(numbers);

    expect(result).toBe(15);
  });

  test('숫자가 하나인 배열의 합을 계산한다', () => {
    const numbers = [1];

    const operation = new SumOperation();
    const result = operation.calculate(numbers);

    expect(result).toBe(1);
  });

  test('빈 배열을 입력하면 0을 반환한다', () => {
    const numbers = [];

    const operation = new SumOperation();
    const result = operation.calculate(numbers);

    expect(result).toBe(0);
  });
});
