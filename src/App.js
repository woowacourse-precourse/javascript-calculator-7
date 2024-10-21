import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from "./errorMessages.js";

class App {
  async run() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.");
    const answer = Calculator.calculate(input);
    Console.print(`결과 : ${answer}`);
  }
}

class Calculator {
  static calculate(input) {
    if (input === "") {
      return 0;
    }

    let divider = this.setDivider(input);
  }

  static setDivider(input) {
    let defaultDivider = [",", ":"];

    if (input.startsWith("//")) {
      const endIndex = input.indexOf("\\n");

      return input.slice(2, endIndex);
    }

    if (input.includes(",") || input.includes(":")) {
      return defaultDivider;
    }

    throw new Error(ERROR_MESSAGES.NO_VALID_DIVIDER);
  }
}

export default App;
