import { MESSAGE } from "./constants.js";
import { handleError, printResult, readInput, sum } from "./utils.js";

class App {
  validateAndCovertNumbers(strings) {
    return strings.map((string) => {
      const number = Number(string);
      if (isNaN(number)) handleError(MESSAGE.INVALID_NUMBER_OR_DELIMITER);

      if (number < 0) handleError(MESSAGE.NEGATIVE_NUMBER_NOT_ALLOWED);

      return number;
    });
  }

  validateCustomDelimiters(index, customDelimiter) {
    if (index === -1) {
      handleError(MESSAGE.INVALID_CUSTOM_DELIMITER_FORMAT);
    }

    if (customDelimiter.length > 1) {
      handleError(MESSAGE.SINGLE_DELIMITER_REQUIRED);
    }
  }

  validateHasDelimiter(defaultDelimiters, string) {
    const hasDelimiter = defaultDelimiters.some((delimiter) =>
      string.includes(delimiter)
    );

    if (!hasDelimiter) handleError(MESSAGE.INVALID_INPUT_FORMAT);
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

  async run() {
    const input = await readInput();
    const numbers = this.parseStringToNumbers(input);
    const result = sum(numbers);

    return printResult(result);
  }
}

export default App;
