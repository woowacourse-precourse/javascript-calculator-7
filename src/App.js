import { Console } from "@woowacourse/mission-utils";
import { calculator } from "./calculator.js";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      const result = calculator(input);

      Console.print(`결과 : ${result}`);
    } catch (error) {
      throw error;
    }
  }
}

export default App;
