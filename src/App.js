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
    let numberArray = this.createNumberArray(input, divider);
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

  static createNumberArray(input, divider) {
    let numberString = input;

    if (numberString.startsWith("//")) {
      const endIndex = numberString.indexOf("\\n");

      numberString = numberString.slice(endIndex + 2);

      if (numberString.length === 0) {
        throw new Error(ERROR_MESSAGES.NO_NUMBERS_INPUT);
      }

      if (typeof divider === "string" && !numberString.includes(divider)) {
        throw new Error(ERROR_MESSAGES.CUSTOM_DIVIDER_NOT_USED);
      }

      return numberString.split(divider).map(Number);
    }

    if (Array.isArray(divider)) {
      divider.forEach((d) => {
        numberString = numberString.split(d).join(",");
      });

      return numberString.split(",").map(Number);
    }

    return numberString.split(divider).map(Number);
  }
}

export default App;
