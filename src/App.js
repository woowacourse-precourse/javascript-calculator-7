import { Console } from "@woowacourse/mission-utils";
import { isValidInput } from "./utils.js";

class App {
  async run() {
    let input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
    isValidInput(input);
  }
}

export default App;
