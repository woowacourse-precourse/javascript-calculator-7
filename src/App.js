import { Console } from "@woowacourse/mission-utils";
import sumNum from "./Calculator.js";
import Separator from "./Separator.js";
import NumberArr from "./NumberArr.js";

import InputView from "./InputView.js";
import OutputView from "./OutputView.js";

class App {
  async run() {
    let customSeparator = "";
    let IS_CUSTOM = true;

    try {
      const inputView = new InputView();
      const separator = new Separator();
      const numberArr = new NumberArr();

      let string = await inputView.getInput();
      [customSeparator, string, IS_CUSTOM] =
        separator.makeCustomSeparator(string);

      numberArr.makeRegexp(customSeparator, IS_CUSTOM);
      const numArr = numberArr.makeNumArr(string);

      const answer = sumNum(numArr);
      OutputView(answer);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
