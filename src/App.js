import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
      const result = stringCalculator(input);
      Console.print(`결과 : ${result}`);
    }
    catch (error) {
      Console.print(`${error.message}`)
    }
  }
}

function stringCalculator(input) {

  checkEmptyString(input)
  checkCustomDelimiterPosition(input);
  checkMultipleDeclareCustomDelimiter(input);

  var parsedArray = [];
  const newLineInput = newLineProcess(input); // 문자 \n을 실제 개행문자로 바꿔버린다음 매칭
  const customDelimiterPattern = /^\/\/(.)\n(.*)/;
  const customDelimiterFlag = newLineInput.match(customDelimiterPattern);
  var customDelimiter;

  if (!customDelimiterFlag) {
    parsedArray = parseDefaultDelimiter(newLineInput);
  }
  else {
    customDelimiter = customDelimiterFlag[1];
    const numbers = customDelimiterFlag[2];
    parsedArray = parseCustomDelimiter(numbers, customDelimiter); // 최초로 구분자 및 커스텀 구분자로 구분된 parsedArray
  }

  checkMultipleDelimiter(input, customDelimiter);
  checkIncludesNonNumber(parsedArray);
  checkNegativeNumbers(parsedArray);

  var resultNumArray = convertNumArray(parsedArray);

  const resultSum = calculateSum(resultNumArray);

  return resultSum;

}

function newLineProcess(input) { // 개행문자로 바꿔주는 함수
  return input.replace(/\\n/g, "\n");
}

function parseDefaultDelimiter(input) { // 기본 구분자로 파싱
  var parsedArray = input.split(/[,:]/);
  return parsedArray;
}

function parseCustomDelimiter(numbers, customDelimiter) { // 커스텀, 기본 구분자로 파싱
  const regex = new RegExp(`[${customDelimiter},:]`);
  var parsedArray = numbers.split(regex);
  return parsedArray;
}

function checkEmptyString(input) { // 빈 문자열 체크 함수
  if (input.trim() === "") {
    throw new Error("ERROR : 빈 문자열이 입력되었습니다.");
  }
}

function checkNegativeNumbers(parsedArray) { // 음수 체크 함수
  parsedArray.forEach((item) => {
    const parsedNum = parseInt(item, 10);
    if (parsedNum < 0) {
      throw new Error("[ERROR] 음수가 포함되어 있습니다.");
    }
  });
}

function checkIncludesNonNumber(parsedArray) { // 숫자, 알파벳, 한글, 구분자 외 특수문자 체크 함수
  const nonNumberPattern = /[^\d\s-]+/g;
  parsedArray.forEach((item) => {
    if (nonNumberPattern.test(item)) {
      throw new Error("[ERROR] 숫자가 아닌 문자가 포함되어 있습니다.");
    }
  });
}

function checkCustomDelimiterPosition(input) { // 커스텀 구분자 선언 위치 체크 함수
  if (input.includes('//') && !input.startsWith('//')) {
    throw new Error("[ERROR] 커스텀 구분자는 맨 앞에 위치해야 합니다.");
  }
}

function checkMultipleDeclareCustomDelimiter(input) { // 커스텀 구분자 선언을 두 번이상 하는지 체크 함수
  const customDelimiterPattern = /\/\/./g;
  const matches = input.match(customDelimiterPattern);
  if (matches && matches.length > 1) {
    throw new Error("[ERROR] 커스텀 구분자 선언은 한 번만 가능합니다.");
  }
}

function checkMultipleDelimiter(input, customDelimiter) { // 커스텀, 기본 구분자 중복 사용 체크 함수
  const multipleDelimiterPattern = customDelimiter ? new RegExp(`[${customDelimiter},:]{2,}`) : /[,|:]{2,}/;
  if (multipleDelimiterPattern.test(input)) {
    throw new Error("[ERROR] 구분자가 여러개 사용되었습니다.");
  }
}

function convertNumArray(parsedArray) { // 문자열 배열 숫자 배열로 변환
  var convertNumArray = parsedArray.map((item) => parseInt(item, 10));
  console.log(convertNumArray)
  return convertNumArray;
}

function calculateSum(parsedArray) { // 합 구하는 함수
  let resultSum = parsedArray.reduce((acc, curr) => acc + curr, 0);
  return resultSum;
}

export default App;
