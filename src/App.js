import InputHandler from "./InputHandler.js";
import { MissionUtils } from "@woowacourse/mission-utils";


class App {
  #inputHandler = new InputHandler();
  async run() {
    await this.#inputHandler.getInput();
    this.#inputHandler.inputTypeCheck();
    
  }
}

export default App;
