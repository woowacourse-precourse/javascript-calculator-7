import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await MissionUtils.Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );

      const result = this.calculateSum(input);
      MissionUtils.Console.print(`결과: ${result}`);
    } catch (error) {
      MissionUtils.Console.print(`[ERROR] ${error.message}`);
    }
  }
  calculateSum(input) {
    const numbers = input.split("").map(Number);
    return numbers.reduce((sum, number) => sum + number, 0);
  }
}

export default App;
