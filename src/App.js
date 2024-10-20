import { Console } from "@woowacourse/mission-utils";
import calculator from "./utils/calculator.js";

class App {
  async run() {
    const input = await Console.readLineAsync(
      "계산하고싶은 문자열을 입력하세요.\n"
    );
    const result = calculator(input);
    Console.print(`결과 : ${result}`);
  }
}

export default App;
