import Calculator from '../src/Calculator';
import Delimiter from '../src/Delimiter';

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator(new Delimiter());
  });

  describe('calculate', () => {
    describe('커스텀 구분자가 없는 경우', () => {
      it('기본 구분자를 사용하여 입력한 문자열에서 숫자를 추출하고 더한 결과를 반환한다', () => {
        const value = '1,2:,3,4:56';

        const result = calculator.calculate(value);

        expect(result).toBe(66);
      });
    });

    describe('커스텀 구분자가 있는 경우', () => {
      it('커스텀 구분자를 포함하여 입력한 문자열에서 숫자를 추출하고 더한 결과를 반환한다', () => {
        const value = '//;\\n1,2:,3,4;56';

        const result = calculator.calculate(value);

        expect(result).toBe(66);
      });
    });
  });
});
