import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    if (
      input.length >= 5 &&
      input.startsWith("//") &&
      input[3] === "\\" &&
      input[4] === "n"
    ) {
      // 커스텀 구분자 일 경우
    } else {
      // 기본 구분자일 경우
    }
  }
}

export default App;
