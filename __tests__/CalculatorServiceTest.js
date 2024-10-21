import CalculatorDTO from '../src/CalculatorDTO';
import CalculatorService from '../src/CalculatorService';

describe('서비스 로직 테스트', () => {
  test("주어진 DTO를 기반으로 덧셈을 수행할 수 있다.", () => {
    const dto = new CalculatorDTO([1,2,3,4,5]);
    const expected = 1 + 2 +3 + 4 + 5;
    const result = CalculatorService.calcuate(dto);
    expect(result).toEqual(expected);
  });
})