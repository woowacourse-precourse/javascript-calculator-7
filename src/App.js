import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
      const result = stringCalculator(input);
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
  var parsedArray = [];

  const customDelimiter = /^\/\/(.)\n(.*)/;
  const customDelimiterFlag = input.match(customDelimiter);

  if (!customDelimiterFlag) {
    parsedArray = parseDefaultDelimiter(input);
  } else {
    const customDelim = customDelimiterFlag[1];
    const numbers = customDelimiterFlag[2];
    parsedArray = parseCustomDelimiter(numbers, customDelim);
  }

  convertNumArray(parsedArray)
  console.log
}

function parseDefaultDelimiter(input) {
  return input.split(/[,:]/);
}


function parseCustomDelimiter(numbers, customDelimiter) {
  const regex = new RegExp(`[${customDelimiter},:]`);
  return numbers.split(regex);
}

function convertNumArray(parsedArray) {
  return parsedArray.map((num) => {
    const parsedNum = parseInt(num, 10);
    if (isNaN(parsedNum)) {
      throw new Error("[ERROR] 숫자가 아닌 값이 포함되어 있습니다");
    }
    return parsedNum;
  });
}



export default App;
