import { MissionUtils } from "@woowacourse/mission-utils";
import Calculator from "./Calculator.js"; // Calculator 임포트

class App {
  async run() {
    try {
      const input = await MissionUtils.Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
      const calculator = new Calculator();
      const result = calculator.calculate(input);
      MissionUtils.Console.print(`결과 : ${result}`);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error
    }
  }
}

export default App;