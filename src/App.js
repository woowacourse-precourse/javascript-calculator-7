import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      // 입력을 받는다.
      const input = await MissionUtils.Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요."
      );
    } catch (error) {
      MissionUtils.Console.print("[ERROR] ");
    }
  }
}

export default App;
