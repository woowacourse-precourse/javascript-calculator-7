import { Console } from "@woowacourse/mission-utils";
import { DEFAULT_DELIMITER, ERROR_MESSAGE } from "./constant.js";

class Calculator {
  run(input) {
    try {
      if (this.isEmptyString(input)) {
        return 0;
      }

      const { delimiter, remainingInput } =
        this.extractDelimiterAndRemainingInput(input);
      const numbers = this.splitAndParseNumbers(remainingInput, delimiter);
      return numbers.reduce((acc, curr) => acc + curr, 0);
    } catch (error) {
      this.handleError(error);
    }
  }

  isEmptyString(input) {
    return input.trim() === "";
  }

  extractDelimiterAndRemainingInput(input) {
    let delimiter = DEFAULT_DELIMITER;
    let remainingInput = input;
    return { delimiter, remainingInput };
  }

  splitAndParseNumbers(input, delimiter) {
    return input.split(delimiter).map(this.validateAndParseNumber);
  }

  validateAndParseNumber(str) {
    const num = Number(str.trim());
    if (isNaN(num)) {
      throw new Error(ERROR_MESSAGE.INVALID_INPUT);
    }
    if (num < 0) {
      throw new Error(ERROR_MESSAGE.NEGATIVE_NUMBER);
    }
    return num;
  }

  handleError(error) {
    Console.print(error.message);
    throw error;
  }
}

export default Calculator;
