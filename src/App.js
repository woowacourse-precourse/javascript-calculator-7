import { Console } from "@woowacourse/mission-utils";
import checkCustomDelimiter from "./utils/checkCustomDelimiter.js";

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

    Console.print(`입력 문자열 확인: ${input}`);
  }
}

export default App;
