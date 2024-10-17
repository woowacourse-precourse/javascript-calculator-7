import { MissionUtils } from "@woowacourse/mission-utils";

const { Console } = MissionUtils;

class App {
  async run() {
    try {
      let input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.");
      let separator = "";
      if (input.indexOf("//") === 0 && input.indexOf("\\n") > 2) {
        separator = input.slice(2, input.indexOf("\\n"));
        input = input.slice(input.indexOf("\\n") + 2);
        Console.print(separator);
      }
    } catch (err) {
      Console.print(`[ERROR]${err}`);
    }
  }
}

export default App;
