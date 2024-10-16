import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await MissionUtils.Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요\n"
    );
    const numbers = this.parseInput(input);

    const result = numbers.reduce((acc, num) => acc + num, 0);
    MissionUtils.Console.print(`결과: ${result}`);
  }
  parseInput(input) {
    const DELIMITER = /,|:/;
    const numbers = input.split(DELIMITER).map(Number);
    return numbers;
  }
}

export default App;
