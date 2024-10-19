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

export default App;
