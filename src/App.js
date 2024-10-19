import { Console } from "@woowacourse/mission-utils";
import {
  ERROR_EMPTY_STRING,
  ERROR_INVALID_DELIMITER,
  CUSTOM_DELIMITER,
} from "./Constants.js";

class App {
  async run() {
    let input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");

    try {
      const result = this.getResult(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      throw error;
    }
  }

  getResult(input) {
    if (!input) {
      throw new Error(ERROR_EMPTY_STRING);
    }

    const numbers = this.splitInput(input);
    return this.sumNumbers(numbers);
  }

  splitInput(input) {
    let delimiter = /,|:/;

    const customDelimiterMatch = input.match(CUSTOM_DELIMITER);

    if (customDelimiterMatch) {
      const slicedInput = input.slice(5);
      delimiter = new RegExp(customDelimiterMatch[1]);
      input = slicedInput;
    }

    const numbers = input.split(delimiter);
    return numbers;
  }

  sumNumbers(numbers) {
    let sum = 0;

    for (let num of numbers) {
      if (isNaN(Number(num)) || Number(num) < 0) {
        throw new Error(ERROR_INVALID_DELIMITER);
      }

      sum += parseInt(num);
    }

    return sum;
  }
}

export default App;
