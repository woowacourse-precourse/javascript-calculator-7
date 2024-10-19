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
  const appInputTest = "//;\\n1";

  test("공백", () => {
    expect(calculator.calculate(noneTest)).toEqual(`결과 : 0`);
  });
  test("//;\\n1;2;3", () => {
    expect(calculator.calculate(testInput)).toEqual(`결과 : 6`);
  });
  test("1:2:3", () => {
    expect(calculator.calculate(noneCustomTestInput)).toEqual(`결과 : 6`);
  });
  test("-3;-2;1", () => {
    expect(calculator.calculate(minTest)).toEqual(false);
  });
  test(appInputTest, () => {
    expect(calculator.calculate(appInputTest)).toEqual(`결과 : 1`);
  });
});

const getRandomAscii = () => {
  let randomAscii = "";
  const randomNum = Math.floor(Math.random() * 94) + 33; // ASCII 범위 33 ~ 126
  randomAscii = String.fromCharCode(randomNum);
  return randomAscii;
};

const getRandomList = (random, count) => {
  const randomNum = Math.random();
  const randomNumberList = []; // 랜덤으로 생성된 숫자를
  for (let i = 0; i < Math.floor(random * count); i++) {
    let inpurtRandomNumber = Math.random() * 10;
    if (randomNum * 10 > 5) inpurtRandomNumber = Math.floor(inpurtRandomNumber);
    randomNumberList.push(inpurtRandomNumber);
  }
  return randomNumberList;
};

describe("regex_random_test", () => {
  const testCount = 10;
  for (let i = 0; i < testCount; i++) {
    const count = 10; // 숫자의 개수 아무리 큰수가 들어가도 강건한 테스트를 위함
    const random = Math.random();
    let testInput = "";
    const randomNumberList = getRandomList(random, count); // 랜덤으로 생성된 숫자를 배열에 담는다
    let error = false;
    // 커스텀 구분자가 있는경우
    if (random * 10 >= 5) {
      const randomAscii = getRandomAscii(); // 랜덤으로 아스키 넣는다
      if (randomAscii === "") error = true;
      testInput += `//${randomAscii}\\n`;
      for (let i = 0; i < randomNumberList.length; i++) {
        testInput += randomNumberList[i];
        if (i === randomNumberList.length - 1) break;
        const randomDevider = Math.random() * 10;
        if (randomDevider >= 7) testInput += ":";
        else if (randomDevider >= 4) testInput += ",";
        else testInput += randomAscii;
      }
    }
    //커스텀 구분자가 없는 경우
    else {
      for (let i = 0; i < randomNumberList.length; i++) {
        testInput += randomNumberList[i];
        if (i === randomNumberList.length - 1) break;
        const randomDevider = Math.random() * 10;
        if (randomDevider >= 5) testInput += ":";
        else testInput += ",";
      }
    }
    if (testInput.includes(" ")) error = true;

    test(`random : ${testInput}`, () => {
      expect(calculator.calculate(testInput)).toEqual(
        error
          ? `[ERROR]`
          : randomNumberList.length != 0
          ? `결과 : ${calculator.add(...randomNumberList)}`
          : `결과 : 0`
      );
    });
  }
});
