import { Console } from "@woowacourse/mission-utils";
import { CALCULATOR_MESSAGE, ERROR_MESSAGE } from "./constants.js";
import {
  failIsNumbers,
  failVaildSeparator,
  failNumberRange,
} from "./validation.js";

class App {
  async run() {
    await this.enterInput();
    try {
      this.calculateResult();
      this.printResult();
    } catch (error) {
      throw error;
    }
  }

  async enterInput() {
    Console.print(CALCULATOR_MESSAGE.CALCULATOR_START);
    this.input = await Console.readLineAsync("");
  }

  splitInput() {
    if (this.input.startsWith("//")) {
      const [customDelimiter, separatedInput] = this.input
        .slice(2)
        .split("\\n");
      return separatedInput.split(customDelimiter);
    }

    return this.input.split(/,|:/);
  }

  calculateResult() {
    const numbers = this.splitInput().map((number) =>
      number === "" ? 0 : number
    );
    this.checkInput(numbers);
    this.sum = numbers.reduce((acc, cur) => acc + Number(cur), 0);
  }

  printResult() {
    Console.print(CALCULATOR_MESSAGE.CALCULATOR_RESULT + this.sum);
  }

  checkInput(Input) {
    if (failIsNumbers(Input)) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER);
    }
    if (failVaildSeparator(Input)) {
      throw new Error(ERROR_MESSAGE.INVALID_SEPARATOR);
    }
    if (failNumberRange(Input)) {
      throw new Error(ERROR_MESSAGE.INVALID_RANGE);
    }
  }
}

export default App;
