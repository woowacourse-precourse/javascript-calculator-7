import { Console } from "@woowacourse/mission-utils";
import handleCalculation from "./controllers/CalculatorController.js";
import renderError from "./views/ErrorView.js";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );
      handleCalculation(input);
    } catch (error) {
      renderError(
        "입력 오류 \n 유효하지 않은 입력입니다. 다시 시도해 주세요.\n"
      );
    }
  }
}

export default App;
