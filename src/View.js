import { Console } from "@woowacourse/mission-utils";
import Constant from "./constants/Constant.js";

class View {
  async inputPrompt() {
    let userInput = await Console.readLineAsync(Constant.INPUT_MESSAGE);
    return userInput;
  }

  outputView(result) {
    Console.print(`${Constant.RESULT_MESSAGE}${result}`);
  }
}

export default View;
