import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );
      Console.print(`결과: ${input}`);
    } catch (error) {
      Console.print(`[ERROR] 에러 발생`);
    }
  }

  parseNumbers(input) {
    const DEFAULT_DELIMITERS = /[,:]/g;
    return input
      .split(DEFAULT_DELIMITERS)
      .map((num) => num.trim())
      .filter((num) => num !== "")
      .map(Number);
  }
}

export default App;
