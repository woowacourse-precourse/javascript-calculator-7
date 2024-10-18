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

function isEmptyString(input) {
  if (input.trim() === "") {
    return 0;
  }
  return 1;
}

function stringCalculator(input) {
  if (!isEmptyString(input)) {
    throw new Error("ERROR : 빈 문자열이 입력되었습니다.");
  }

  checkCustomDelimiterPosition(input);
  var parsedArray = [];

  const customDelimiter = /^\/\/(.)\n(.*)/;
  const customDelimiterFlag = input.match(customDelimiter);

  if (!customDelimiterFlag) {
    parsedArray = parseDefaultDelimiter(input);
  }
  else {
    const customDelimiter = customDelimiterFlag[1];
    const numbers = customDelimiterFlag[2];
    parsedArray = parseCustomDelimiter(numbers, customDelimiter);
  }

  var resultSepArray = convertArray(parsedArray);

  checkNegativeNumbers(resultSepArray);
  checkFAlphabetsAndKorean(resultSepArray);
  checkSpecialCharacters(resultSepArray);

  var resultNumArray = convertNumArray(resultSepArray);

  const resultSum = calculateSum(resultNumArray);

  return resultSum;

}

function parseDefaultDelimiter(input) {
  var parsedArray = input.split(/[,:]/);
  return parsedArray;
}

function parseCustomDelimiter(numbers, customDelimiter) {
  const regex = new RegExp(`[${customDelimiter},:]`);
  var parsedArray = numbers.split(regex);
  return parsedArray;
}

function convertArray(parsedArray) {
  let resultArray = [];
  parsedArray.forEach((item) => {
    const splitItem = item.split('');
    resultArray = resultArray.concat(splitItem);
  });
  return resultArray;
}

function checkNegativeNumbers(resultSepArray) {
  resultSepArray.forEach((item) => {
    if (item === '-') {
      throw new Error("[ERROR] 음수가 포함되어 있습니다.");
    }
  });
}

function checkFAlphabetsAndKorean(resultSepArray) {
  const regex = /[a-zA-Z가-힣]/;
  resultSepArray.forEach((item) => {
    if (regex.test(item)) {
      throw new Error("[ERROR] 알파벳 또는 한글이 포함되어 있습니다.");
    }
  });
}

function checkSpecialCharacters(resultSepArray) {
  const regex = /[^0-9a-zA-Z가-힣,-]/;
  resultSepArray.forEach((item) => {
    if (regex.test(item)) {
      throw new Error("[ERROR] 구분자가 아닌 특수문자가 포함되어 있습니다.");
    }
  });
}

function checkCustomDelimiterPosition(input) {
  if (input.includes('//') && !input.startsWith('//')) {
    throw new Error("[ERROR] 커스텀 구분자는 맨 앞에 위치해야 합니다.");
  }
}

function convertNumArray(resultSepArray) {
  var convertNumArray = resultSepArray.map((item) => parseInt(item, 10));
  return convertNumArray;
}

function calculateSum(resultNumArray) {
  let resultSum = resultNumArray.reduce((acc, curr) => acc + curr, 0);
  return resultSum;
}

export default App;
