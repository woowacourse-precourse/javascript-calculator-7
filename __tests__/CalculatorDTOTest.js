import CalculatorDTO from "../src/CalculatorDTO";


describe('DTO 테스트', () => {
  test('주어진 입력을 가지고 value 필드를 초기화 할 수 있다.', () => { 
    const dto = new CalculatorDTO([1,2,3,4]);
    const expected = [1,2,3,4];
    
    expect(dto.values).toStrictEqual(expected);
  })
})