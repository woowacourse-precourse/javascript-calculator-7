import { Console } from "@woowacourse/mission-utils";
import processInput from "./utils/processInput.js";

class App {
  async run() {
    const UserInput = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
    const result = processInput(UserInput);
    Console.print(`결과 : ${result}`);
  }
}

export default App;
