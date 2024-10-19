import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );
      const result = this.calculateSum(input);
      Console.print(`결과: ${result}`);
    } catch (error) {
      Console.print(`[ERROR] 에러 발생`);
    }
  }

  calculateSum(input) {
    const numbers = this.parseNumbers(input);
    return numbers.reduce((sum, num) => sum + num, 0);
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
