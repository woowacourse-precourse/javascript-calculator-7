import { Console } from "@woowacourse/mission-utils";
import handleCalculation from "./controllers/CalculatorController.js";
import renderError from "./views/ErrorView.js";

class App {
  async run() {
    async function getInputString() {
      while (true) {
        try {
          const input = await Console.readLineAsync(
            "덧셈할 문자열을 입력해 주세요.\n"
          );

          if (input.trim() === "") {
            renderError("입력오류 : 빈 문자열입니다. 다시 입력해주세요\n\n ");
            continue;
          }
          return input;
        } catch (error) {
          renderError(
            "입력 오류 \n 유효하지 않은 입력입니다. 다시 시도해 주세요.\n"
          );
          continue;
        }
      }
    }
    getInputString().then((input) => {
      handleCalculation(input);
    });
  }
}

export default App;
