import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      let input = await MissionUtils.Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );

      const splitInput = input.split(/[,:]/);

      MissionUtils.Console.print(`결과 : ${splitInput}`);
    } catch (error) {
      MissionUtils.Console.print(`[ERROR] ${error.message}`);
      throw error;
    }
  }
}

export default App;
