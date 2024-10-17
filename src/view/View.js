import { Console } from "@woowacourse/mission-utils";
import Constant from "../constants.js/Constant.js";

class View {
  async inputPrompt() {
    let userInput = await Console.readLineAsync(Constant.inputMessage);
    return userInput;
  }

  outputView(sum) {
    Console.print(`${Constant.resultMessage}${sum}`);
  }
}

export default View;
