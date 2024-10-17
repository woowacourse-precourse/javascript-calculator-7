import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "./constants/Messages.js";

class User {
  #delimiters;

  constructor() {
    this.#delimiters = [",", ":"];
  }
  async readNumber() {
    const answer = await Console.readLineAsync(MESSAGES.inputNumber);
    const numbers = this.#splitString(answer);
    const sum = this.#calculateNumbers(numbers);
    this.#printResult(sum);
  }

  #printResult(sum) {
    console.log(MESSAGES.result + sum);
  }

  #splitString(answer) {
    return this.#delimiters.reduce(
      (acc, delimiter) => {
        return acc.flatMap((string) => string.split(delimiter));
      },
      [answer]
    );
  }

  #calculateNumbers(numbers) {
    return numbers.map(Number).reduce((acc, number) => acc + number);
  }
}

export default User;
