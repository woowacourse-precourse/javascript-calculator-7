// 제공하는 Console API를 사용하기 위해 import
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      // 사용자로부터 입력 받기 (줄바꿈 포함)
      const input = await MissionUtils.Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );

      // 빈 문자열 처리
      const result = this.calculate(input);

      // 빈 문자열이 아닌 경우 입력된 값을 그대로 출력
      MissionUtils.Console.print(`결과: ${result}`);
    } catch (error) {
      // 오류났을 때 출력
      MissionUtils.Console.print(error.message);
    }
  }

  calculate(input) {
    // 빈 문자열일 경우에 0 반환
    if (input === "") {
      return 0;
    }

    //다른 로직 추가 예정

    return input;
  }
}

export default App;
