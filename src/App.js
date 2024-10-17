import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await this.getInput();
  }

  async getInput() {
    return await MissionUtils.Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요."
    );
  }
}

export default App;
