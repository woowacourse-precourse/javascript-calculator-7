import Calculator from "../src/Calculator";

describe("sum 테스트", () => {
  test.each([
    {
      input: [0],
      expected: 0,
    },
    {
      input: [1, 2],
      expected: 3,
    },
    {
      input: [1, 2, 3],
      expected: 6,
    },
  ])("$input의 원소를 더한 결과는 $expected 이다.", ({ input, expected }) => {
    const result = Calculator.sum(input);
    expect(result).toBe(expected);
  });
});
