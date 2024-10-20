import { Console } from "@woowacourse/mission-utils";
import handleCalculation from "./controllers/CalculatorController.js";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );
      handleCalculation(input);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default App;
