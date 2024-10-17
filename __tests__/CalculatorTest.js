import Calculator from "../src/Calculator";

const calculator = new Calculator();

describe("sum()", () => {
  const { sum } = calculator;
  test("숫자의 합 구하기", async () => {
    expect(sum([1, 2, 3])).toBe(6);
  });
});
