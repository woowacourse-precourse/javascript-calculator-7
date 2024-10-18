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
  const noneTest = "";
  const testInput = "//;\\n1;2;3";
  const noneCustomTestInput = "1:2:3";
  const minTest = "-3;-2;1";

  test("공백", () => {
    expect(calculator.testRegex(noneTest)).toEqual(0);
  });
  test("//;\\n1;2;3", () => {
    expect(calculator.testRegex(testInput)).toEqual({
      error: false,
      numbers: [1, 2, 3],
    });
  });
  test("1:2:3", () => {
    expect(calculator.testRegex(noneCustomTestInput)).toEqual({
      error: false,
      numbers: [1, 2, 3],
    });
  });
  test("-3;-2;1", () => {
    expect(calculator.testRegex(minTest)).toEqual({ error: true });
  });
});

describe("regex_random_test", () => {
  const random = Math.random();
  let testInput = "";
  const randomNumberList = [];
  for (let i = 0; i < Math.floor(random * 10); i++) {
    const inpurtRandomNumber = Math.floor(Math.random() * 10);
    randomNumberList.push(inpurtRandomNumber);
  }
  if (random * 10 >= 5) {
    let randomAscii = Math.floor(random * 100);
    randomAscii = String.fromCharCode(randomAscii);
    testInput += `//${randomAscii}\\n`;
    for (let i = 0; i < randomNumberList.length; i++) {
      testInput += randomNumberList[i];
      const randomDevider = Math.random() * 10;
      if (randomDevider >= 7) testInput += ":";
      else if (randomDevider >= 4) testInput += ",";
      else testInput += randomAscii;
    }
  } else {
    for (let i = 0; i < randomNumberList.length; i++) {
      testInput += randomNumberList[i];
      if (i === randomNumberList.length - 1) break;
      const randomDevider = Math.random() * 10;
      if (randomDevider >= 5) testInput += ":";
      else testInput += ",";
    }
  }
  console.log(testInput);
  test(`random : ${testInput}`, () => {
    expect(calculator.testRegex(testInput)).toEqual({
      error: false,
      numbers: randomNumberList,
    });
  });
});
