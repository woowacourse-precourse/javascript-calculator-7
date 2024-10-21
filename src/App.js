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

      return { divider: customDivider, numberString };
    }

    const defaultDivider = [",", ":"];
    if (input.includes(':') && input.includes(',')) {
      return { divider: defaultDivider, numberString: input };
    }

    if (input.includes(",")) {
      return { divider: ",", numberString: input };
    }

    if (input.includes(":")) {
      return { divider: ":", numberString: input };
    }

    throw new Error(ERROR_MESSAGES.NO_VALID_DIVIDER);
  }

  static createNumberArray(numberString, divider) {
    console.log('🚀 numberString', numberString);
    console.log('🚀 divider', divider);
    if (divider.includes(",") && divider.includes(":")) {
      let numberArray = numberString.split(',').flatMap(numStr => numStr.split(':')).map(Number);
      return numberArray;
    }

    if (divider == ",") {
      let numberArray = numberString.split(",").map(Number);
      return numberArray;
    }

    if (divider == ":") {
      let numberArray = numberString.split(":").map(Number);
      return numberArray;
    }

    return numberString.split(divider).map(Number);
  }

  static sum(numberArray) {
    console.log('🚀 numberArray', numberArray);
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
