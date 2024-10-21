import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    async function getUserInput() {
      const INPUT = await MissionUtils.Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );
      return INPUT;
    }

    function calculate(NUM_LIST) {
      var SUM = 0;
      if (!!NUM_LIST) {
        SUM = NUM_LIST.reduce((ACCU, CURR, IDX) => {
          return (ACCU += CURR);
        }, 0);
        // MissionUtils.Console.print(`결과: ${SUM}`);
      }
      return SUM;
    }

    function processInput(INPUT) {
      var NUM = "";
      var NUM_LIST = [];
      var SEPARATOR = "";
      var START_IDX = 1;
      if (INPUT == undefined) {
        console.log(`undefined`);
        NUM_LIST.append(0);
        return NUM_LIST;
      } else if (INPUT.trim() == "") {
        return `숫자를 입력하시지 않으셨습니다.`;
      } else if ((INPUT.slice(0, 2) == "//") & (INPUT.slice(4, 6) == "\\n")) {
        if (!!parseInt(INPUT.slice(2, 3))) {
          return `[ERROR] 구별자가 숫자입니다.`;
        }
        START_IDX = 6;
        SEPARATOR = [INPUT.slice(2, 3)];
      } else if ((INPUT[0] != 0) & !parseInt(INPUT[0])) {
        return `[ERROR] 숫자가 아닌 것으로 연산을 시작했습니다.`;
      } else {
        NUM = INPUT[0];
      }
      for (var IDX = START_IDX; IDX < INPUT.length; IDX++) {
        if (
          (!!SEPARATOR & (INPUT[IDX] == SEPARATOR)) |
          (!SEPARATOR & ((INPUT[IDX] == ",") | (INPUT[IDX] == ":")))
        ) {
          if (parseInt(NUM).toString() == NUM) {
            if (IDX < INPUT.length - 1) {
              NUM_LIST.push(parseInt(NUM));
              NUM = "";
            } else {
              return `[ERROR] 구별자로 끝났습니다.`;
            }
          } else {
            return `[ERROR] 구별자나 숫자가 아닌 것을 입력하셨습니다.`;
          }
        } else NUM += INPUT[IDX];
      }

      if (parseInt(NUM).toString() != NUM) {
        if (NUM.trim() == "") {
          return `[ERROR] 숫자를 입력하시지 않으셨습니다.`;
        }
        return `[ERROR] 구별자나 숫자가 아닌 것을 입력하셨습니다.`;
      } else {
        NUM_LIST.push(parseInt(NUM));
      }
      // console.log(`IDX: ${IDX}, NUM: ${NUM}, NUM_LIST: ${NUM_LIST}`);
      return NUM_LIST;
    }

    let INPUT_AWAIT = await getUserInput();
    let NUM_LIST_AWAIT = [];
    let SUM_AWAIT = "";
    // console.log(`INPUT_AWAIT: ${INPUT_AWAIT}`);
    if (INPUT_AWAIT) NUM_LIST_AWAIT = processInput(INPUT_AWAIT);
    else return `결과 :0`;
    if (
      (NUM_LIST_AWAIT.length >= 7) &
      (NUM_LIST_AWAIT.slice(0, 7) == "[ERROR]")
    )
      return NUM_LIST_AWAIT;
    else {
      SUM_AWAIT = calculate(NUM_LIST_AWAIT).toString();
      return `결과 : ${SUM_AWAIT}`;
    }
  }
}
export default App;
