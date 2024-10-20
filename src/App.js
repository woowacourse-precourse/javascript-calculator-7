import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    MissionUtils.Console.readLine(
      "덧셈할 문자열을 입력해 주세요.\n",
      (INPUT) => {
        var NUM_LIST = [];
        NUM_LIST = INPUT.split(":");
        console.log(`결과: ${NUM_LIST}`);
      }
    );
  }
}

export default App;
