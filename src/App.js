import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const STRING_INPUT = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요."
    );

    if (STRING_INPUT.trim() === "") {
      Console.print("결과 : 0");
      return;
    }

    MissionUtils.Console.print("결과 : " + STRING_INPUT);
  }
}

export default App;
