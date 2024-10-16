import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constants.js";

class App {
  async readInput() {
    const userInput = await Console.readLineAsync(MESSAGE.INPUT);
    return userInput;
  }

  parseString(string) {
    const defaultDelimiters = [",", ":"];
    let result = string;

    if (string.startsWith("//")) {
      result = this.parseCustomDelimiters(string, defaultDelimiters);
    }

    const regex = new RegExp(`[${defaultDelimiters.join("")}]`);
    const numbers = result.split(regex);

    return numbers;
  }

  parseCustomDelimiters(string, defaultDelimiters) {
    const findIndex = string.indexOf("\\n");
    const customDelimiter = string.slice(2, findIndex);
    defaultDelimiters.push(customDelimiter);

    return string.slice(findIndex + 2);
  }

  async run() {
    const input = await this.readInput();
    const numbers = this.parseString(input);
  }
}

export default App;
