import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    MissionUtils.Console.readLine(
      "덧셈할 문자열을 입력해 주세요.\n",
      (INPUT) => {
        var NUM_LIST = [];
        var NUM = "";
        for (var i = 0; i <= INPUT.length; i++) {
          if (
            ((i != 0) & ((INPUT[i] == ",") | (INPUT[i] == ":"))) |
            (i == INPUT.length)
          ) {
            NUM_LIST.push(parseInt(NUM));
            NUM = "";
          } else {
            NUM += INPUT[i];
          }
          // console.log(`i:${i}, NUM:${NUM}, NUM_LIST: ${NUM_LIST}`);
        }

        const SUM = NUM_LIST.reduce((ACCU, CURR, IDX) => {
          return (ACCU += CURR);
        }, 0);

        console.log(`결과: ${SUM}`);
        // console.log(`결과: ${NUM_LIST}`);
      }
    );
  }
}

export default App;
