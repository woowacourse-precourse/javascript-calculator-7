import { Console } from "@woowacourse/mission-utils";

const DEFAULT_DELIMETER = [",", ":"];

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

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

function calculate(input) {
  // 공백인 경우
  if (input.length === 0) return 0;

  // 커스텀 구분자가 존재하는 경우
  if (input.slice(0, 2) === "//" && input.slice(3, 5) === "\\n") {
    const custom_delimeter = [...DEFAULT_DELIMETER, input[2]];
    let remain = input.slice(5);
    const changedEscapeDelimiters = custom_delimeter.map(escapeRegExp);
    const cleanedRemain = remain.split(
      new RegExp(changedEscapeDelimiters.join("|"))
    );
    return cleanedRemain.reduce((sum, num) => sum + Number(num), 0);
  }
  // 그 외
  if (checkDefaultFormat(input)) {
    const cleanedInput = input.split(new RegExp(DEFAULT_DELIMETER.join("|")));
    return cleanedInput.reduce((sum, num) => sum + Number(num), 0);
  }
}

class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    if (checkInputFormat(input)) {
      const result = calculate(input);
      Console.print(`결과 : ${result}`);
    }
  }
}

export default App;
