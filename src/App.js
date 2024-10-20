import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    MissionUtils.Console.readLine(
      "덧셈할 문자열을 입력해 주세요.\n",
      (answer) => {
        console.log(`결과: ${answer}`);
      }
    );
  }
}

export default App;
