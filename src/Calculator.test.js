import { Calculator } from "./Calculator";
const calculator = new Calculator();

// add 함수 테스트 코드 정의
describe("add test", () => {
  const a = 1,
    b = 2,
    c = 3,
    d = 4;

  // a와 b를 각각 add 함수에 전달하여 더하기
  test("a + b = 3", () => {
    expect(calculator.add(a, b)).toBe(3); // 두 인자를 전달
  });

  // a, b, c, d를 각각 add 함수에 전달하여 더하기
  test("a + b + c + d = 10", () => {
    expect(calculator.add(a, b, c, d)).toBe(10); // 네 인자를 전달
  });
});

// regex 함수 테스트 코드 정의
describe("regex test", () => {
  const testInput = "//;\n1;2;3";
  const noneCustomTestInput = "1;2;3";
  test("//;\\n1;2;3", () => {
    expect(calculator.regexTest(testInput)).toEqual([1, 2, 3]);
  });
  test("1;2;3", () => {
    expect(calculator.regexTest(noneCustomTestInput)).toEqual([1, 2, 3]);
  });
});
