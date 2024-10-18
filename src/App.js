import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await MissionUtils.Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
      const result = this.calculate(input);
      MissionUtils.Console.print(`결과 : ${result}`);
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }

  calculate(input) {
    if (!input) return 0;

    const customDelimiterMatch = input.match(/^\/\/(.+)\n/);
    let numbersString = input;
    let delimiter = /,|:/;

    if (customDelimiterMatch) {
      delimiter = customDelimiterMatch[1];
      numbersString = input.split("\n")[1];
    }

    const numbers = numbersString.split(new RegExp(delimiter)).map(Number);

    this.validateNumbers(numbers);

    return numbers.reduce((acc, curr) => acc + curr, 0);
  }

  validateNumbers(numbers) {
    numbers.forEach((num) => {
      if (num < 0) {
        throw new Error("[ERROR] 음수는 허용되지 않습니다.");
      }
    });
  }
}

export default App;
