import { MissionUtils } from "@woowacourse/mission-utils";
import { printOuput, readInput } from "./utils.js";
import Calculator from "./Calculator.js";

class App {
  async run() {
    try {
      const inputValue = await readInput("덧셈할 문자열을 입력해 주세요.\n");

      const cal = new Calculator(inputValue);
      const numbers = cal.separator();

      printOuput(`결과 : ${cal.sumNumbers(numbers)}`);
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default App;
