import { Console } from "@woowacourse/mission-utils";

const DEFAULT_DELIMETER = [",", ":"];

function isNumeric(str) {
  return /^\d+$/.test(str);
}

function checkDefaultFormat(input) {
  let cleanedInput = input;
  DEFAULT_DELIMETER.forEach((delimeter) => {
    cleanedInput = cleanedInput.replaceAll(delimeter, "");
  });
  if (!isNumeric(cleanedInput)) {
    throw new Error("[ERROR] 입력 형식이 올바르지 않습니다");
  }
  return true;
}

// 입력 형식 검사
function checkInputFormat(input) {
  if (input.slice(0, 2) === "//" && input.slice(3, 5) === "\\n") {
    const custom_delimeter = [...DEFAULT_DELIMETER, input[2]];
    let remain = input.slice(5);
    custom_delimeter.forEach((delimeter) => {
      remain = remain.replaceAll(delimeter, "");
    });
    if (!isNumeric(remain)) {
      throw new Error("[ERROR] 입력 형식이 올바르지 않습니다");
    }
    return true;
  }

  if (checkDefaultFormat) return true;
}

class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
  }
}

export default App;
