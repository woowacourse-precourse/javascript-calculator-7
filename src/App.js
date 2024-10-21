import { Console } from "@woowacourse/mission-utils";
import userInputParser from "./parser.js";
import { userInputValidator } from "./validator.js";
import { calculator } from "./utils/calculator.js";
import { isEmpty } from "./utils/validateInput.js";

class App {
  async run() {
    try {
      const userInput = await Console.readLineAsync(
        "덧셈할 문자열을 입력해주세요.\n"
      );
      let answer;

      if (isEmpty(userInput)) {
        answer = 0;
      } else {
        userInputValidator(userInput);
        const parsedUserInputArray = userInputParser(userInput);
        answer = calculator.addition(parsedUserInputArray);
      }

      Console.print(`결과 : ${answer}`);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default App;
