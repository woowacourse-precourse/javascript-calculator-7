import { parse } from "@babel/core";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      // 입력을 받는다.
      const INPUT = await MissionUtils.Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );
      if (this.isValidInput(INPUT)) {
        const RESULT_ARR = this.separateInput(INPUT);
        // this.add(RESULT_ARR);
      } else {
        MissionUtils.Console.print("[ERROR] 유효한 입력값이 아닙니다.");
      }
    } catch (error) {
      MissionUtils.Console.print(`[ERROR] ${error}`);
    }
  }

  // 유효한 입력값인지 확인하는 함수
  isValidInput(INPUT) {
    if (INPUT.length == 0) {
      return false;
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
          throw Error("[ERROR] 구분자를 제외하고 숫자로 입력해주세요.");
        }
        if (NUM < 0) {
          throw Error("[ERROR] 양수를 입력하세요.");
        }
        return NUM;
      });
    }
  }

  // add(RESULT_ARR) {}
}

export default App;
