import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      // 입력을 받는다.
      const input = await MissionUtils.Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );
      if (this.isValidInput(input)) {
        this.plus();
      } else {
        MissionUtils.Console.print("[ERROR] 유효한 입력값이 아닙니다.");
      }
    } catch (error) {
      MissionUtils.Console.print(`[ERROR] ${error}`);
    }
  }

  // 유효한 입력값인지 확인하는 함수
  isValidInput(input) {
    if (input.length == 0) {
      return false;
    }
    return true;
  }

  // 숫자의 합을 계산하는 함수
  plus() {}
}

export default App;
