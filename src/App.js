import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constants.js";

class App {
  handleError(messages) {
    const formattedMessage = `[ERROR] ${messages}`;
    throw Error(formattedMessage);
  }

  validateAndCovertNumbers(strings) {
    return strings.map((string) => {
      const number = Number(string);
      if (isNaN(number)) this.handleError(MESSAGE.INVALID_NUMBER_OR_DELIMITER);

      if (number < 0) this.handleError(MESSAGE.NEGATIVE_NUMBER_NOT_ALLOWED);

      return number;
    });
  }

  validateCustomDelimiters(index, customDelimiter) {
    if (index === -1) {
      this.handleError(MESSAGE.INVALID_CUSTOM_DELIMITER_FORMAT);
    }

    if (customDelimiter.length > 1) {
      this.handleError(MESSAGE.SINGLE_DELIMITER_REQUIRED);
    }
  }

  validateHasDelimiter(defaultDelimiters, string) {
    const hasDelimiter = defaultDelimiters.some((delimiter) =>
      string.includes(delimiter)
    );

    if (!hasDelimiter) this.handleError(MESSAGE.INVALID_INPUT_FORMAT);
  }

  parseStringToNumbers(string) {
    if (!string.trim()) return [];

    const defaultDelimiters = [",", ":"];
    let result = string;

    if (string.startsWith("//")) {
      result = this.parseCustomDelimiters(string, defaultDelimiters);
    }

    this.validateHasDelimiter(defaultDelimiters, string);

    const regex = new RegExp(`[${defaultDelimiters.join("")}]`);
    const strings = result.split(regex);

    return this.validateAndCovertNumbers(strings);
  }

  parseCustomDelimiters(string, defaultDelimiters) {
    const findIndex = string.indexOf("\\n");
    const customDelimiter = string.slice(2, findIndex);

    this.validateCustomDelimiters(findIndex, customDelimiter);

    defaultDelimiters.push(customDelimiter);
    return string.slice(findIndex + 2);
  }

  parseToNumber(numbers) {
    return this.validateNoNegativeNumbers(numbers.map(Number));
  }

  sum(numbers) {
    if (!numbers.length) return 0;

    let result = 0;
    for (const number of numbers) result += number;

    return result;
  }

  async readInput() {
    const userInput = await Console.readLineAsync(MESSAGE.INPUT);
    return userInput;
  }

  printResult(result) {
    return Console.print(MESSAGE.PRINT + result);
  }

  async run() {
    const input = await this.readInput();
    const numbers = this.parseStringToNumbers(input);
    const result = this.sum(numbers);

    return this.printResult(result);
  }
}

export default App;
