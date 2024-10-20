import { Console } from "@woowacourse/mission-utils";
import Model from "./model.js";
import Controller from "./controller.js";

class App {

  async run() {
    const inputValue = await Console.readLineAsync(
        '덧셈할 문자열을 입력해 주세요. \n'
    );
    const inputString = new Model();
    const separator = new Controller();

    inputString.updateData(inputValue);
    inputString.numberList = separator.baseSeparatorSplit(inputString.stringValue, inputString.numberList);
    Console.print(inputString["numberList"]);
  }
}

export default App;
