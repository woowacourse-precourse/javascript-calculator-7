import Calculator from "../src/Calculator";

const calculator = new Calculator();

describe("sum()", () => {
  const { sum } = calculator;
  test("숫자의 합 구하기", async () => {
    expect(sum([1, 2, 3])).toBe(6);
  });
});

describe("splitNumbers()", () => {
  const { splitNumbers } = calculator;

  test("쉼표를 포함한 문자열에서 숫자 분리", async () => {
    expect(splitNumbers("1,2,3")).toEqual([1, 2, 3]);
  });

  test("쉼표, 콜론을 포함한 문자열에서 숫자 분리", async () => {
    expect(splitNumbers("1,2:3")).toEqual([1, 2, 3]);
  });
});
