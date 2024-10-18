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

function checkEmptyString(input) {
  if (input.trim() === "") {
    return 0;
  }
  return 1;
}

function stringCalculator(input) {
  if (!checkEmptyString(input)) {
    throw new Error("ERROR : 빈 문자열이 입력되었습니다.");
  }

  checkCustomDelimiterPosition(input);
  checkMultipleDelimiter(input);
  var parsedArray = [];

  const newLineInput = newLineProcess(input); // 문자 \n을 실제 개행문자로 바꿔버린다음 매칭
  const customDelimiter = /^\/\/(.)\n(.*)/;
  const customDelimiterFlag = newLineInput.match(customDelimiter);

  if (!customDelimiterFlag) {
    parsedArray = parseDefaultDelimiter(newLineInput);
  }
  else {
    const customDelimiter = customDelimiterFlag[1];
    const numbers = customDelimiterFlag[2];
    parsedArray = parseCustomDelimiter(numbers, customDelimiter); // 최초로 구분자 및 커스텀 구분자로 구분된 parsedArray
  }

  checkIncludesNonNumber(parsedArray);
  checkNegativeNumbers(parsedArray);

  var resultNumArray = convertNumArray(parsedArray);

  const resultSum = calculateSum(resultNumArray);

  return resultSum;

}

function newLineProcess(input) {
  return input.replace(/\\n/g, "\n");
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

function checkNegativeNumbers(parsedArray) {
  parsedArray.forEach((item) => {
    const parsedNum = parseInt(item, 10);
    if (parsedNum < 0) {
      throw new Error("[ERROR] 음수가 포함되어 있습니다.");
    }
  });
}

function checkIncludesNonNumber(parsedArray) {
  const nonNumberPattern = /[^\d\s-]+/g;
  parsedArray.forEach((item) => {
    if (nonNumberPattern.test(item)) {
      throw new Error("[ERROR] 숫자가 아닌 문자가 포함되어 있습니다.");
    }
  });
}

function checkCustomDelimiterPosition(input) {
  if (input.includes('//') && !input.startsWith('//')) {
    throw new Error("[ERROR] 커스텀 구분자는 맨 앞에 위치해야 합니다.");
  }
}

function checkMultipleDelimiter(input) {
  const multipleDelimiterPattern = /[,|:]{2,}/;
  if (multipleDelimiterPattern.test(input)) {
    throw new Error("[ERROR] 구분자가 여러개 사용되었습니다.");
  }
}

function convertNumArray(parsedArray) {
  var convertNumArray = parsedArray.map((item) => parseInt(item, 10));
  return convertNumArray;
}

function calculateSum(parsedArray) {
  let resultSum = parsedArray.reduce((acc, curr) => acc + curr, 0);
  return resultSum;
}

export default App;
