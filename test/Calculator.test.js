import Calculator from '../src/app/Calculator';
import Delimiter from '../src/app/Delimiter';

describe('Calculator', () => {
  /** @type {Calculator} */
  let calculator;

  beforeEach(() => {
    calculator = new Calculator(new Delimiter());
  });
  describe('calculate', () => {
    it('구분자를 가진 숫자 문자열이 주어지는 경우 각 수의 합을 반환한다', () => {
      const values = '1,2,3';

      const result = calculator.calculate(values);

      expect(result).toBe(6);
    });
  });
});
