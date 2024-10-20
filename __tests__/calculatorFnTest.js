import Calculator from "../src/Calculator";

describe("문자열 계산기 함수 테스트", () => {
  const calculator = new Calculator();

  test("커스텀 구분자를 문자열로부터 구분할 수 있다.", () => {
    const inputs = ["//;\\n12345", "//.\\n12345", "//-\\n12345", "12345k", ";\\n1234"];
    const outputs = [";", ".", "-", 0, 0];

    outputs.forEach((output, index) => {
      expect(calculator.getSeperatorFrom(inputs[index])).toBe(output);
    });
  });

  test("문자열에서 구분자들로 숫자들만 따로 추출할 수 있다.", () => {
    const inputs = ["1", "1,2,3", "1,2:3", "1:2:3", "1"];
    const outputs = [["1"], ["1", "2", "3"], ["1", "2", "3"], ["1", "2", "3"]];

    outputs.forEach((output, index) => {
      expect(calculator.seperateBy(inputs[index])).toEqual(output);
    });
  });
});
