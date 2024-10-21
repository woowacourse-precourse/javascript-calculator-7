import Calculator from "../src/Calculator";
import { ErrorMessages } from "../src/Constant";

describe("Calculator 테스트", () => {
  test("checkIsPositiveNumber : 모두 양수가 오는 경우", () => {
    const input = ["1", "2", "3"];
    const output = [1, 2, 3];
    const result = Calculator.checkIsPositiveNumber(input);

    expect(result).toEqual(output);
  });

  test("checkIsPositiveNumber : 빈 문자열이 포함된 경우", () => {
    const input = ["", "2", "3"];
    const output = [0, 2, 3];
    const result = Calculator.checkIsPositiveNumber(input);

    expect(result).toEqual(output);
  });

  test("checkIsPositiveNumber : 음수가 포함된 경우", () => {
    const input = ["-1", "2", "3"];
    expect(() => {
      Calculator.checkIsPositiveNumber(input);
    }).toThrow(ErrorMessages.CALCULATOR_CHECK_IS_POSITIVENUMBER);
  });

  test("checkIsPositiveNumber : 빈 문자열이 아닌 문자열이 포함된 경우", () => {
    const input = ["abc", "2", "3"];
    expect(() => {
      Calculator.checkIsPositiveNumber(input);
    }).toThrow(ErrorMessages.CALCULATOR_CHECK_IS_POSITIVENUMBER);
  });

  test("addNumbers : 정상 처리 되는 경우", () => {
    const input = [1, 2, 3];
    const output = 6;
    const result = Calculator.addNumbers(input);

    expect(result).toEqual(output);
  });
});
