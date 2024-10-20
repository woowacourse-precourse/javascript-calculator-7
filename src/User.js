import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "./constants/Messages.js";
import { DELIMITERS } from "./constants/Delimeters.js";
import { seperateCustomDelimiter } from "./handleCustomDelimiter.js";
import validator from "./utils/validator.js";

class User {
  #numbersString;
  #delimiters;

  constructor() {
    this.#delimiters = [...DELIMITERS];
  }

  async readNumber() {
    const answer = await Console.readLineAsync(MESSAGES.inputNumber);
    this.handleCustomDelimiter(answer);
    const numbers = this.splitString(this.#numbersString);
    const sum = this.calculateNumbers(numbers);
    this.printResult(sum);
  }

  handleCustomDelimiter(string) {
    const { customDelimiter, numbersString } = seperateCustomDelimiter(string);
    this.#delimiters = [...this.#delimiters, customDelimiter];
    this.#numbersString = numbersString;
  }

  printResult(sum) {
    Console.print(MESSAGES.result + sum);
  }

  splitString(answer) {
    const numbers = this.#delimiters
      .reduce(
        (acc, delimiter) => {
          return acc.flatMap((string) => string.split(delimiter));
        },
        [answer]
      )
      .map(Number);
    validator.validateValueToSum(numbers);
    return numbers;
  }

  calculateNumbers(numbers) {
    return numbers.reduce((acc, number) => acc + number, 0);
  }
}

export default User;
