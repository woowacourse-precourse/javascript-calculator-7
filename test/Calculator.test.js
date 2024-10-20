import Calculator from '../src/app/Calculator';

describe('Calculator', () => {
  /** @type {Calculator} */
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });
  describe('calculate', () => {
    it('numeric string 배열이 주어지는 경우 각 수의 합을 반환한다', () => {
      const values = ['1', '2', '3'];

      const result = calculator.calculate(values);

      expect(result).toBe(6);
    });
  });
});
