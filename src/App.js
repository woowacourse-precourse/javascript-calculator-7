import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const inputString = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    let splitArr;
    if (inputString.startsWith("//")) {
      let customDelimiter = extractCustomDelimiter(inputString);
      splitArr = splitCustomDelimiter(inputString, customDelimiter);
    } else {
      splitArr = splitDelimiter(inputString);
    }

    let qualifyNumArr = splitArr.map(Number);
    const result = checkPositiveNumber(qualifyNumArr);

    if (result === true) {
      let answer = qualifyNumArr.reduce((acc, cur) => acc + cur);
      Console.print(`결과 : ${answer}`);
    } else if (result === false) {
      throw new Error("[ERROR]: 구분자와 양수만 입력해주세요.");
    }
  }
}

function extractCustomDelimiter(inputString) {
  if (inputString.search(/\\n/) !== -1) {
    return inputString.substring(2, inputString.search(/\\n/));
  } else {
    throw new Error("[ERROR]: 커스텀 구분자를 정확히 입력해주세요.");
  }
}

function splitCustomDelimiter(inputString, customDelimiter) {
  let remainString = inputString.substring(
    inputString.search(/\\n/) + 2,
    inputString.length
  );
  const regex = new RegExp(`${customDelimiter}|,|:`);
  return remainString.split(regex);
}

function splitDelimiter(inputString) {
  const regex = /,|:/;
  return inputString.split(regex);
}

function checkPositiveNumber(qualifyNumArr) {
  for (const element of qualifyNumArr) {
    if (element < 0 || Number.isNaN(element) === true) {
      return false;
    }
  }
  return true;
}

export default App;
