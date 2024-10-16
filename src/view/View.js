import { Console } from "@woowacourse/mission-utils";
import Constant from "../constants.js/Constant.js";

class View {
  async inputPrompt() {
    await Console.readLineAsync(Constant.inputMessage);
  }
}

export default View;
