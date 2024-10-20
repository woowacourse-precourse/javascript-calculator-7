import { Console } from "@woowacourse/mission-utils";
import checkCustomDelimiter from "./utils/checkCustomDelimiter.js";
import isOnlyPositive from "./utils/isOnlyPositive.js";

class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    let result = 0;
    const delimiters = [",", ":"];

    if (input.length === 0) {
      Console.print(`결과 : ${result}`);
      return;
    }

    const remainingString = checkCustomDelimiter(input, delimiters);
    const splitString = remainingString
      .split(new RegExp(delimiters.join("|"), "g"))
      .map(Number);

    if (isOnlyPositive(splitString)) {
      splitString.forEach((num) => (result += num));
      Console.print(`결과 : ${result}`);
    }
  }
}

export default App;
