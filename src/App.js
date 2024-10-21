// 제공하는 Console API를 사용하기 위해 import
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      // 사용자로부터 입력 받기 (줄바꿈 포함)
      const input = await MissionUtils.Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );

      // 입력된 값을 그대로 출력
      MissionUtils.Console.print(`입력된 값: ${input}`);
    } catch (error) {
      // 오류
      MissionUtils.Console.print(error.message);
    }
  }
}

export default App;
