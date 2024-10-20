import { Console } from "@woowacourse/mission-utils";

import { parseInput } from "./inputParser.js";
import { calculateSum } from "./calculator.js";

class App {
  async run() {
    try {
      const input = await this.getInput();
      const numbers = parseInput(input);
      const result = calculateSum(numbers);
      this.printResult(result);
    } catch (error) {
      throw new Error("[ERROR] " + error.message);
    }
  }

  async getInput() {
    return await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
  }
  printResult(result) {
    return Console.print("결과 : " + result);
  }
}

export default App;
