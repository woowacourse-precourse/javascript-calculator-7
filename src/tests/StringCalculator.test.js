import StringAddCalculator from '../classes/StringAddCalculator';

describe('StringAddCalculator', () => {
  test('정상 케이스. 숫자의 합을 반환', () => {
    const numbersArray = [1, 2, 3];
    const result = StringAddCalculator.sum(numbersArray);
    expect(result).toBe(6);
  });

  test('정상 케이스. 하나의 숫자만 있을 때 그 숫자 그대로 반환', () => {
    const numbersArray = [42];
    const result = StringAddCalculator.sum(numbersArray);
    expect(result).toBe(42);
  });
});
