import { Console } from "@woowacourse/mission-utils";
import DelimiterHandler from "./DelimiterHandler";
import Calculator from "./Calculator";

class App {
  async run() {
    const input = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n'
    );
    try {
      const numbers = DelimiterHandler(input);
      const result = new Calculator().calculateSum(numbers);
      Console.print(`결과 : ${result}`);

    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default App;
