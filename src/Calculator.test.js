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
  test(appInputTest, () => {
    expect(calculator.testRegex(appInputTest)).toEqual({
      error: false,
      numbers: [1],
    });
  });
});

// 랜덤으로 숫자를 제외한 아스키 제공
const getRandomAscii = () => {
  let randomAscii = "";
  while (true) {
    let randomNum = Math.floor(Math.random() * 100); // 0~99 범위 난수
    if (randomNum < 48 || randomNum > 57) {
      // 숫자 범위(48~57)를 제외
      randomAscii = String.fromCharCode(randomAscii);
      break;
    }
  }
  return randomAscii;
};
const getRandomList = (random, count) => {
  const randomNumberList = []; // 랜덤으로 생성된 숫자를
  for (let i = 0; i < Math.floor(random * count); i++) {
    const inpurtRandomNumber = Math.floor(Math.random() * 10);
    randomNumberList.push(inpurtRandomNumber);
  }
  return randomNumberList;
};

describe("regex_random_test", () => {
  for (let i = 0; i < 100; i++) {
    const count = 10; // 숫자의 개수 아무리 큰수가 들어가도 강건한 테스트를 위함
    const random = Math.random();
    let testInput = "";
    const randomNumberList = getRandomList(random, count); // 랜덤으로 생성된 숫자를 배열에 담는다
    const randomAscii = getRandomAscii(); // 랜덤으로 아스키 넣는다

    // 커스텀 구분자가 있는경우
    if (random * 10 >= 5) {
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
    test(`random : ${testInput}`, () => {
      expect(calculator.testRegex(testInput)).toEqual(
        randomNumberList.length != 0
          ? {
              error: false,
              numbers: randomNumberList,
            }
          : 0
      );
    });
  }
});
