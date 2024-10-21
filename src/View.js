import { Console } from "@woowacourse/mission-utils";
import Constant from "./constants/Constant.js";

class View {
  async inputPrompt() {
    return await Console.readLineAsync(Constant.INPUT_MESSAGE);
  }

  outputView(result) {
    Console.print(`${Constant.RESULT_MESSAGE}${result}`);
  }
}

export default View;
