import { MissionUtils } from "@woowacourse/mission-utils";

class Input {
  async getPlusString() {
    try {
      const plusString = await MissionUtils.Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
      return plusString;
    } catch (error) {
      // reject 되는 경우
    }
  }
}

export default Input;
