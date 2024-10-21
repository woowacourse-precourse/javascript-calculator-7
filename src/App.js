import { parse } from "@babel/core";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      // 입력을 받는다.
      const INPUT = await MissionUtils.Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );
      if (INPUT.length == 0) {
        MissionUtils.Console.print("결과 : 0");
        return;
      }
      if (this.isValidInput(INPUT)) {
        const RESULT_ARR = this.separateInput(INPUT);
        const RESULT = this.add(RESULT_ARR);
        MissionUtils.Console.print(`결과 : ${RESULT}`);
      } else {
        throw Error("[ERROR] 유효한 입력값이 아닙니다.");
      }
    } catch (error) {
      throw Error("[ERROR]");
    }
  }

  // 유효한 입력값인지 확인하는 함수
  isValidInput(INPUT) {
    if (INPUT.length == 0) {
      MissionUtils.Console.print("결과 : 0");
      return;
    }
    return true;
  }

  separateInput(INPUT) {
    // 커스텀 구분자로 시작하는 경우
    if (INPUT.startsWith("/")) {
      const [LETTER, NUMBER] = INPUT.split(/\\n/);

      if (!LETTER.startsWith("//") || !NUMBER) {
        throw Error("[ERROR]");
      }

      const SEPARATOR = LETTER.substring(2);
      const RESULT = NUMBER.split(SEPARATOR);

      return RESULT.map((item) => {
        const NUM = Number(item);
        if (isNaN(NUM)) {
          throw Error("[ERROR]");
        }
        if (NUM < 0) {
          throw Error("[ERROR]");
        }
        return NUM;
      });
    } else if (!isNaN(Number(INPUT[0]))) {
      const RESULT = INPUT.split(/[,;]/);

      return RESULT.map((item) => {
        const NUM = Number(item);
        if (isNaN(NUM)) {
          throw Error("[ERROR] 구분자를 제외하고는 숫자를 입력해주세요.");
        }
        if (NUM < 0) {
          throw Error("[ERROR] 양수를 입력해주세요.");
        }
        return NUM;
      });
    } else {
      throw Error("[ERROR]");
    }
  }

  add(RESULT_ARR) {
    let SUM = 0;
    for (let i = 0; i < RESULT_ARR.length; i++) {
      SUM += RESULT_ARR[i];
    }
    return SUM;
  }
}

export default App;
