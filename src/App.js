import InputHandler from "./InputHandler.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  #inputHandler = new InputHandler();
  async run() {
    await this.#inputHandler.getInput();
    this.#inputHandler.getInputDelimiter();
    this.#inputHandler.getNumbers();
    const sum = this.#inputHandler.getSum();
    MissionUtils.Console.print(`결과 : ${sum}`);
  }
}

export default App;