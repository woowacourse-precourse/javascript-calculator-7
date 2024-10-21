import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await this.getUserInput();
  }

  async getUserInput() {
    const input = await MissionUtils.Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
    return input;
  }
}

export default App;
