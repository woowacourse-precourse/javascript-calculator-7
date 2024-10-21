import { Console } from "@woowacourse/mission-utils";
import { isEmpty, isOnlyStringOrNumber } from "./utils/validateInput.js";

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
        Console.print(`결과 : ${userInput}`);
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default App;
