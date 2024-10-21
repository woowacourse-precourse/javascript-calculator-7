import { Console } from "@woowacourse/mission-utils";
import { isEmpty, isOnlyStringOrNumber } from "./utils/validateInput.js";
import { userInputParser } from "./parser.js";

class App {
  async run() {
    try {
      const userInput = await Console.readLineAsync(
        "덧셈할 문자열을 입력해주세요.\n"
      );

      if (isEmpty(userInput)) {
        return Console.print(`결과 : 0`);
      } else if (isOnlyStringOrNumber(userInput)) {
        throw new Error(ERROR_MESSAGE.NO_SEPARATOR);
      } else {
        const parseredUserInputArray = userInputParser(userInput);
        const answer = calculator.addition(parseredUserInputArray);
        Console.print(`결과 : ${answer}`);
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default App;
