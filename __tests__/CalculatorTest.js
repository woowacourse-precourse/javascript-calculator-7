import Calculator from "../src/Calculator";

describe("sum()", () => {
  const calculator = new Calculator();
  test("한자리 숫자와 구분자 문자열이 주어졌을 때 숫자의 합 반환", async () => {
    calculator.init([], "1,2,3");
    expect(calculator.sum()).toBe(6);
  });

  test("여러자리 숫자와 구분자 문자열이 주어졌을 때 숫자의 합 반환", async () => {
    calculator.init([], "12,345");
    expect(calculator.sum()).toBe(357);
  });

  test("빈 문자열이 주어졌을 때 0 반환", async () => {
    calculator.init([], "");
    expect(calculator.sum()).toBe(0);
  });

  test("구분자 없이 입력했을 때 숫자 그대로 반환", async () => {
    calculator.init([], "123");
    expect(calculator.sum()).toBe(123);
  });

  test("커스텀 구분자가 한 개 주어졌을 때 숫자의 합 반환", async () => {
    calculator.init([";"], "12;3");
    expect(calculator.sum()).toBe(15);
  });

  test("커스텀 구분자가 여러 개 주어졌을 때 숫자의 합 반환", async () => {
    calculator.init([";", "?"], "12;3?4");
    expect(calculator.sum()).toBe(19);
  });
});

describe("splitNumbers()", () => {
  const calculator = new Calculator();

  test("쉼표를 포함한 문자열에서 숫자 분리", async () => {
    calculator.init([], "1,2,3");
    expect(calculator.splitNumbers("1,2,3")).toEqual([1, 2, 3]);
  });

  test("쉼표, 콜론을 포함한 문자열에서 숫자 분리", async () => {
    calculator.init([], "1,2:3");
    expect(calculator.splitNumbers("1,2:3")).toEqual([1, 2, 3]);
  });

  test("쉼표, 콜론, 커스텀 구분자를 포함한 문자열에서 숫자 분리", async () => {
    calculator.init([";"], "1,2:3;4");
    expect(calculator.splitNumbers("1,2:3;4")).toEqual([1, 2, 3, 4]);
  });
});
