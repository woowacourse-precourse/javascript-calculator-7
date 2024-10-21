import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );
      const sum = this.calculate(input);
      Console.print(`결과 : ${sum}`);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }
  calculate(input) {
    if (input.trim() === "") {
      return 0;
    }
  }
}

export default App;
