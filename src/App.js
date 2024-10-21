import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    getString();

    async function getString() {
      try {
        const STRING = await MissionUtils.Console.readLineAsync(
          "덧셈할 문자열을 입력해 주세요.\n"
        );

        const RESULT = string;

        MissionUtils.Console.print("결과 : " + result);
      } catch (error) {
        // reject 되는 경우
      }
    }
  }
}

export default App;
