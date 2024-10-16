import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constants.js";

class App {
  async readInput() {
    const userInput = await Console.readLineAsync(MESSAGE.INPUT);
    return userInput;
  }

  parseString(string) {
    const defaultDelimiters = [",", ":"];

    const regex = new RegExp(`[${defaultDelimiters.join("")}]`);
    const numbers = string.split(regex);

    return numbers;
  }

  async run() {
    const input = await this.readInput();
    const numbers = this.parseString(input);
  }
}

export default App;
