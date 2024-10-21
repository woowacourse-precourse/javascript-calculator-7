import { Console } from "@woowacourse/mission-utils";
import Calculator from "./calculator.js";

class App {
  async run() {
    const USER_INPUT = await Console.readLineAsync(
      "덧셈할 문자열을 입력해주세요."
    );

    try {
      const FORMATVALUE = USER_INPUT.replace(/\\n/g, "\n");
      const CALCULATOR = new Calculator();
      const RESULT = CALCULATOR.add(FORMATVALUE);

      Console.print(`결과 : ${RESULT}`);
    } catch (error) {
      Console.print(error.message);

      throw error;
    }
  }
}

export default App;
