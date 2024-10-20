import { Console } from "@woowacourse/mission-utils";
import { errorMessages } from "./constant.js";

class App {
  async run() {
    try {
      const read = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );

      if (!read) {
        Console.print("결과 : 0");
        return;
      }
    } catch (e) {
      return new Error(errorMessages.unexpectedError);
    }
  }
}

export default App;
