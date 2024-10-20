import { Console } from "@woowacourse/mission-utils";
import Model from "./model.js";

class App {
  async run() {
    const inputValue = await Console.readLineAsync(
        '덧셈할 문자열을 입력해 주세요. \n'
    );
    const inputString = new Model();
    inputString.updateData(inputValue);
    Console.print(inputString["stringValue"]);
  }
}

export default App;
