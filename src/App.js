import InputHandler from "./InputHandler.js";
import { MissionUtils } from "@woowacourse/mission-utils";


class App {
  #inputHandler = new InputHandler();
  async run() {
    this.#inputHandler.getInput()
    //const input = await Console.readLineAsync('문자열을 입력해주세요.');
    
  }
}

export default App;
