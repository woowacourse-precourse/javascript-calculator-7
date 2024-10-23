import Calculator from "../src/Calculator";

describe("문자열 계산기 함수 테스트", () => {
  const calculator = new Calculator();

  test("숫자로 이루어진 배열의 합을 구할 수 있다.", () => {
    const inputs = [
      [1, 2, 3],
      [2, 4, 6],
    ];
    const outputs = [6, 12];

    outputs.forEach((output, index) => {
      expect(calculator.sum(inputs[index])).toBe(output);
    });
  });

  test("숫자를 담은 배열의 각 원소가 양수인지 확인할 수 있다.", () => {
    const inputs = [
      [1, 2, 3],
      [-2, 4, 6],
      [NaN, 2, 4],
    ];
    const outputs = [true, false, false];

    outputs.forEach((output, index) => {
      expect(calculator.isPositive(inputs[index])).toBe(output);
    });
  });
});
