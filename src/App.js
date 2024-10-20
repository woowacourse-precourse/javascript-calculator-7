import { MissionUtils } from "@woowacourse/mission-utils";
import StringCalculator from "./StringCalculator.js";

class App {
  async run() {
    try {
      MissionUtils.Console.print("덧셈할 문자열을 입력해 주세요. ");
      const input = await MissionUtils.Console.readLineAsync("");

      const calculator = new StringCalculator();
      const result = calculator.parseAndAdd(input);

      MissionUtils.Console.print(`결과 : ${result}`);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }
}

export default App;
