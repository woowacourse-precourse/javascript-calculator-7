import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async run() {
    try {
      const input = await MissionUtils.Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요\n"
      );
      const numbers = this.parseInput(input);

      const result = numbers.reduce((acc, num) => acc + num, 0);
      MissionUtils.Console.print(`결과: ${result}`);
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
  parseInput(input) {
    const DELIMITER = /,|:/;
    const numbers = input.split(DELIMITER).map(Number);
    if (numbers.some((num) => isNaN(num) || num < 0)) {
      throw new Error("[ERROR]");
    }
    return numbers;
  }
}

export default App;
