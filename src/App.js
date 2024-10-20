import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await MissionUtils.Console.readLineAsync(
        "덧셈할 문자열 입력: "
      );
      let delimiter = /[,:]/;
      const sum = input.split(delimiter).reduce((acc, cur) => {
        return acc + Number(cur);
      }, 0);

      MissionUtils.Console.print(`값: ${sum}`);
    } catch (error) {
      MissionUtils.Console.print(`[ERROR] ${error.message}`);
      throw error;
    }
  }
}

export default App;
