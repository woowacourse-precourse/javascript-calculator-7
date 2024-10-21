import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from './constants/Messages.js';
import { DELIMITERS } from './constants/Delimeters.js';
import validator from './utils/validator.js';

class User {
  #numbersString;

  #delimiters;

  #customDelimiterHandler;

  constructor(customDelimiterHandler) {
    this.#delimiters = [...DELIMITERS];
    this.#numbersString = '';
    this.#customDelimiterHandler = customDelimiterHandler;
  }

  async readNumber() {
    const answer = await Console.readLineAsync(MESSAGES.inputNumber);
    validator.validateString(answer);
    this.#handleCustomDelimiter(answer);
    this.#printResult();
  }

  #handleCustomDelimiter(string) {
    const { customDelimiter, numbersString } =
      this.#customDelimiterHandler.getCustomDelimiterAndNumbersString(string);
    if (customDelimiter.length) {
      validator.validateCustomDelimiter(customDelimiter);
      this.#delimiters = [...this.#delimiters, customDelimiter];
    }
    this.#numbersString = numbersString;
  }

  #printResult() {
    const numbers = this.#splitString(this.#numbersString);
    const sum = numbers.reduce((acc, number) => acc + number, 0);
    Console.print(MESSAGES.result + sum);
  }

  #splitString(answer) {
    const numbers = this.#delimiters
      .reduce((acc, delimiter) => acc.flatMap((string) => string.split(delimiter)), [answer])
      .map(Number);
    validator.validateValueToSum(numbers);
    return numbers;
  }
}

export default User;
