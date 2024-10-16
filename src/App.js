import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constants.js";

class App {
  async readInput() {
    const userInput = await Console.readLineAsync(MESSAGE.INPUT);
    return userInput;
  }

  parseStringToNumbers(string) {
    if (!string.trim()) return [];

    const defaultDelimiters = [",", ":"];
    let result = string;

    if (string.startsWith("//")) {
      result = this.parseCustomDelimiters(string, defaultDelimiters);
    }

    const regex = new RegExp(`[${defaultDelimiters.join("")}]`);
    const numbers = result.split(regex);

    return this.parseToNumber(numbers);
  }

  parseCustomDelimiters(string, defaultDelimiters) {
    const findIndex = string.indexOf("\\n");
    const customDelimiter = string.slice(2, findIndex);
    defaultDelimiters.push(customDelimiter);

    return string.slice(findIndex + 2);
  }

  parseToNumber(numbers) {
    return numbers.map(Number);
  }

  sum(numbers) {
    if (!numbers.length) return 0;

    let result = 0;
    for (const number of numbers) result += number;

    return result;
  }

  async run() {
    const input = await this.readInput();
    const numbers = this.parseStringToNumbers(input);
    const result = this.sum(numbers);
  }
}

export default App;
