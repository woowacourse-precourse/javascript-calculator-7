import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await MissionUtils.Console.readLineAsync("덧셈할 문자열 입력: ");

    MissionUtils.Console.print(`입력 값: ${input}`);
  }
}

export default App;