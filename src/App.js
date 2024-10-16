import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 덧셈을 하기 위한 문자열 입력 받기
    const inputValue = await MissionUtils.Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    // MissionUtils.Console.print(input);
  }
}

export default App;
