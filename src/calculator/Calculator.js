import InputValidator from "./InputValidator.js";
import { ERROR_MESSAGE } from "../constants/Messages.js";

class Calculator {
  static calculate(input) {
    if (input === null || input === undefined) return 0;

    let delimiters = [",", ":"];
    let numbers = input;

    if (input.startsWith("//")) {
      const customDelimiterMatch = input.match(/^\/\/(.+)\n(.*)$/);
      
      if (!customDelimiterMatch) {
        throw new Error(ERROR_MESSAGE.INVALID_CUSTOM_DELIMITER);
      }

      const customDelimiters = customDelimiterMatch[1];
      if (customDelimiters.length > 1) {
        throw new Error(ERROR_MESSAGE.MULTIPLE_CUSTOM_DELIMITERS);
      }
      delimiters.push(customDelimiters);
      numbers = customDelimiterMatch[2];
    }

    const splitNumbers = numbers.split(new RegExp(`[${delimiters.join("")}]`));

    InputValidator.validateNumbers(splitNumbers);
    InputValidator.validateConsecutiveDelimiters(numbers, delimiters);

    return splitNumbers.reduce((sum, num) => sum + parseInt(num, 10), 0);
  }
}

export default Calculator;
