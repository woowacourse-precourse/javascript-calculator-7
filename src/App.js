import { Console } from "@woowacourse/mission-utils";
import inputView from "./inputView.js";

class App {
  #userInput;

  constructor() {
    this.#userInput = "";
  }

  async run() {
    this.#userInput = await inputView.readUserInput();
    Console.print(this.#userInput);
  }
}

export default App;
