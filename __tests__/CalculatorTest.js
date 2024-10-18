import Calculator from "../src/Calculator";

const calculator = new Calculator();

describe("sum()", () => {
  const { sum } = calculator;

  test("숫자 배열이 주어졌을 때 숫자의 합 반환", async () => {
    expect(sum([1, 2, 3])).toBe(6);
  });

  test("빈 배열이 주어졌을 때 0 반환", async () => {
    expect(sum([])).toBe(0);
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

  test("쉼표, 콜론, 커스텀 구분자를 포함한 문자열에서 숫자 분리", async () => {
    expect(splitNumbers("1,2:3;4", ";")).toEqual([1, 2, 3, 4]);
  });
});

describe("findCustomSeparator()", () => {
  const { findCustomSeparator } = calculator;

  test("커스텀 구분자가 없을 때 등록하지 않음", async () => {
    expect(findCustomSeparator([])).toEqual([]);
  });

  test("커스텀 구분자 1개 등록", async () => {
    expect(findCustomSeparator(["//;"])).toEqual([";"]);
  });

  test("서로 다른 커스텀 구분자 여러 개 등록", async () => {
    expect(findCustomSeparator(["//;", "//$"])).toEqual([";", "$"]);
  });

  test("같은 커스텀 구분자 여러 개 등록", async () => {
    expect(findCustomSeparator(["//;", "//;"])).toEqual([";"]);
  });
});
