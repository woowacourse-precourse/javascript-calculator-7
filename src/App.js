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

    const { divider, numberString } = this.parseInput(input);
    const numberArray = this.createNumberArray(numberString, divider);
    return this.sum(numberArray);
  }

  static parseInput(input) {
    if (input.startsWith("//")) {
      const endIndex = input.indexOf("\\n");
      const customDivider = input.slice(2, endIndex);
      const numberString = input.slice(endIndex + 2);
      
      if (numberString.length === 0) {
        throw new Error(ERROR_MESSAGES.NO_NUMBERS_INPUT);
      }
      if (!numberString.includes(customDivider)) {
        throw new Error(ERROR_MESSAGES.CUSTOM_DIVIDER_NOT_USED);
      }

      return { divider: customDivider, numberString };
    }

    const defaultDivider = [",", ":"];
    if (defaultDivider.some((d) => input.includes(d))) {
      return { divider: defaultDivider, numberString: input };
    }

    throw new Error(ERROR_MESSAGES.NO_VALID_DIVIDER);
  }

  static createNumberArray(numberString, divider) {
    if (Array.isArray(divider)) {
      divider.forEach((d) => {
        numberString = numberString.split(d).join(",");
      });
      divider = ",";
    }

    let numberArray = numberString.split(divider).map(Number);

    return numberArray;
  }

  static sum(numberArray) {
    if (numberArray.some(isNaN)) {
      throw new Error(ERROR_MESSAGES.INVALID_INPUT);
    }

    if (numberArray.some((num) => num < 0)) {
      throw new Error(ERROR_MESSAGES.NEGATIVE_NUMBER);
    }

    return numberArray.reduce((acc, cur) => acc + cur, 0);
  }
}

export default App;
