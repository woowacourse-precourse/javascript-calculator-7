import { Calculator } from "../src/Calculator.js";
const calculator = new Calculator();

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
  const testCount = 10000;
  for (let i = 0; i < testCount; i++) {
    const count = 10; // 숫자의 개수 아무리 큰수가 들어가도 강건한 테스트를 위함
    const random = Math.random();
    let testInput = "";
    let randomNumberList = getRandomList(random, count); // 랜덤으로 생성된 숫자를 배열에 담는다
    let error = false;
    // 커스텀 구분자가 있는경우
    if (random * 10 >= 5) {
      const randomAscii = getRandomAscii(); // 랜덤으로 아스키 넣는다
      if (randomAscii === "") error = true;
      if (!isNaN(randomAscii)) error = true;
      testInput += `//${randomAscii}\\n`;
      for (let i = 0; i < randomNumberList.length; i++) {
        testInput += randomNumberList[i];
        if (i === randomNumberList.length - 1) break;
        const randomDevider = Math.random() * 10;
        if (randomDevider >= 7) testInput += ":";
        else if (randomDevider >= 4) testInput += ",";
        else testInput += randomAscii;
      }
      if (randomAscii === ".") {
        randomNumberList = randomNumberList.flatMap((number) => {
          if (number % 1 !== 0) {
            // 소수인지 확인
            return number.toString().split(".").map(Number); // 소수점을 기준으로 분리한 후 숫자로 변환
          }
          return number; // 정수는 그대로 반환
        });
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
          ? false
          : randomNumberList.length != 0
          ? `결과 : ${calculator.add(...randomNumberList)}`
          : `결과 : 0`
      );
    });
  }
});
