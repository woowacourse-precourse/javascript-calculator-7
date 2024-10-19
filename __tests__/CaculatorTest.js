import Caculator from "../src/Calculator";

describe("덧셈", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Caculator();
  })

  test("숫자의 합을 구한다.", () => {
    const numbers = [1, 2, 3, 4];
    const result = calculator.addNumbers(numbers);
    expect(result).toBe(10);
  })

  test("숫자를 분리한다.", () => {
    const str = "//:)\n8,3:)9 1";
    const goat = calculator.extractNumbers([":)", ",", ":"], str);
    expect(goat).toEqual([8, 3, 91]);
  })

  
  // test("숫자가 아닌 값이 포함된 배열", () => {
  //   const numbers = [1, "", 3, 4];
  //   expect(() => {}).toThrow("유효하지 않을 값이 입력되었습니다.")
  // })

  // test("음수가 포함된 배열", () => {
  //   const numbers = [1, -2, 3, 4];
  //   expect(() => {}).toThrow();
  // })
  
});