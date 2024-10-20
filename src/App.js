import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await MissionUtils.Console.readLineAsync(
        "덧셈할 문자열 입력: "
      );

      let delimiter = /[,:]/;
      let sum = 0;
      let customDelimiter;
      if (input.startsWith("//") && input.slice(3, 5) === "\\n") {
        customDelimiter = input[2];
        let numbers = input.substr(5);
        sum = numbers
          .split(customDelimiter)
          .reduce((acc, cur) => acc + Number(cur), 0);
      } else {
        sum = input.split(delimiter).reduce((acc, cur) => acc + Number(cur), 0);
      }
      MissionUtils.Console.print(`값: ${sum}`);
    } catch (error) {
      MissionUtils.Console.print(`[ERROR] ${error.message}`);
      throw error;
    }
  }
}

export default App;
