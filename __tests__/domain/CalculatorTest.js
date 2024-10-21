import Calculator from '../../src/domain/Calculator.js';

describe('CalculatorModel', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('양수 배열의 합계 계산 확인', () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = calculator.executeCalculation(numbers);
    expect(result).toBe(15);
  });

  test('큰 숫자들의 합계 계산 확인', () => {
    const numbers = [1000000, 2000000, 3000000];
    const result = calculator.executeCalculation(numbers);
    expect(result).toBe(6000000);
  });

  test('빈 배열에 대한 계산 확인', () => {
    const numbers = [];
    const result = calculator.executeCalculation(numbers);
    expect(result).toBe(0);
  });

  test('단일 요소 배열에 대한 계산 확인', () => {
    const numbers = [22];
    const result = calculator.executeCalculation(numbers);
    expect(result).toBe(22);
  });

  test('매우 큰 배열의 합계 계산 확인', () => {
    const numbers = Array(10000).fill(1);
    const result = calculator.executeCalculation(numbers);
    expect(result).toBe(10000);
  });
});