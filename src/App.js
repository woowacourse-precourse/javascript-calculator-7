import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {}
  getSentence() {
    const sentence = MissionUtils.Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
    return sentence;
  }
  async run() {
    try {
      const sentence = await this.getSentence();
    } catch (error) {
      throw new Error("[ERROR]");
    }
  }
}

export default App;