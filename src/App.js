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

}


export default App;
