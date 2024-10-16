import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constants.js";

class App {
  async readInput() {
    const userInput = await Console.readLineAsync(MESSAGE.INPUT);
    return userInput;
  }

  async run() {
    const input = await this.readInput();
  }
}

export default App;
