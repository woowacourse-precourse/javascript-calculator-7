import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await MissionUtils.Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
      const result = this.calculate(input);
      MissionUtils.Console.print(`결과 : ${result}`);
    } catch (error) {
      MissionUtils.Console.print(`[ERROR] ${error.message}`);
      throw error;
    }
  }

  calculate(input) {
    if (!input) {
      return 0;
    }
    const numbers = input.split(/[,|:]/).map(Number);

    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
}

export default App;
