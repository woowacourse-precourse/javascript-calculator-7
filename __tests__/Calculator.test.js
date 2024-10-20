import { Calculator } from "../src/Calculator.js";
const calculator = new Calculator();

// calculate 함수 테스트 코드 정의
describe("calculate test", () => {
  const noneTest = "";
  const testInput = "//;\\n1;2;3";
  const noneCustomTestInput = "1:2:3";
  const minTest = "-3;-2;1";
  const appInputTest = "//;\\n1";

  test("공백", () => {
    expect(calculator.calculate(noneTest)).toEqual(`결과 : 0`);
  });
  test("//;\\n1;2;3", () => {
    expect(calculator.calculate(testInput)).toEqual(`결과 : 6`);
  });
  test("1:2:3", () => {
    expect(calculator.calculate(noneCustomTestInput)).toEqual(`결과 : 6`);
  });
  test("-3;-2;1", () => {
    expect(calculator.calculate(minTest)).toEqual(false);
  });
  test(appInputTest, () => {
    expect(calculator.calculate(appInputTest)).toEqual(`결과 : 1`);
  });
});
