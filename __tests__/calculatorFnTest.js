import Calculator from "../src/Calculator";

describe("문자열 계산기 함수 테스트", () => {
  test("커스텀 구분자를 문자열로부터 구분할 수 있다.", () => {
    const inputs = ["//;\\n12345", "//.\\n12345", "//-\\n12345"];
    const outputs = [";", ".", "-"];
    const calculator = new Calculator();

    outputs.forEach((output, index) => {
      expect(calculator.getUserSeperator(inputs[index])).toBe(output);
    });
  });
});
