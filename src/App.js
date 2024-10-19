import { MissionUtils } from "@woowacourse/mission-utils";
import calculator from "./calculator.js";

class App {
  async run() {
    const operand =
      await MissionUtils.Console.readLineAsync(
        "덧셈할 문자열을 입력해주세요\n"
      );
    const result = calculator(operand);
    MissionUtils.Console.print("결과 : " + result);
  }
}

export default App;
