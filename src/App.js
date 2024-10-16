import { Console } from "@woowacourse/mission-utils";
import { CALCULATOR_MESSAGE } from "./constants.js";

class App {
  async run() {
    await this.enter();
    this.calculateResult();
  }

  async enter() {
    Console.print(CALCULATOR_MESSAGE.CALCULATOR_START);
    this.input = await Console.readLineAsync("");
  }

  async calculateResult() {
    if (this.input.startsWith("//")) {
      const [customDelimiter, separatedInput] = this.input
        .slice(2)
        .split("\\n");
      const numbers = separatedInput
        .split(customDelimiter)
        .map((number) => parseInt(number));
      const sum = numbers.reduce((acc, cur) => acc + cur, 0);
      Console.print(CALCULATOR_MESSAGE.CALCULATOR_RESULT + sum);
      return;
    }
    // 문자열 앞부분의 "//", "\n" 사이의 커스텀 구분자가 없는 경우, "," 또는 ":"
    const numbers = this.input.split(/,|:/).map((number) => parseInt(number));
    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    Console.print(CALCULATOR_MESSAGE.CALCULATOR_RESULT + sum);
  }
}

export default App;
