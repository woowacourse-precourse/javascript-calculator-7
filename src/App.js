import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    MissionUtils.Console.readLine(
      "덧셈할 문자열을 입력해 주세요.\n",
      (INPUT) => {
        var NUM_LIST = [];
        var NUM = "";
        var SEPARATOR = "";
        var START_IDX = 1;

        if ((INPUT.slice(0, 2) == "//") & (INPUT.slice(3, 5) == "\\n")) {
          SEPARATOR = [INPUT.slice(2, 3)];
          START_IDX = 5;
        } else {
          NUM = INPUT[0];
        }

        for (var IDX = START_IDX; IDX < INPUT.length; IDX++) {
          if (
            (!!SEPARATOR & (INPUT[IDX] == SEPARATOR)) |
            (!SEPARATOR & ((INPUT[IDX] == ",") | (INPUT[IDX] == ":")))
          ) {
            NUM_LIST.push(parseInt(NUM));
            NUM = "";
          } else {
            NUM += INPUT[IDX];
          }
          console.log(`NUM: ${NUM}, NUM_LIST: ${NUM_LIST}`);
        }
        NUM_LIST.push(parseInt(NUM));

        const SUM = NUM_LIST.reduce((ACCU, CURR, IDX) => {
          return (ACCU += CURR);
        }, 0);

        console.log(`결과: ${SUM}`);
      }
    );
  }
}

export default App;
