import { Console } from "@woowacourse/mission-utils";
import Model from "./model.js";
import Controller from "./controller.js";

class App {

  async run() {
    const inputValue = await Console.readLineAsync(
        '덧셈할 문자열을 입력해 주세요. \n'
    );

    const inputString = new Model();
    inputString.updateData(inputValue);

    const inputs = inputString.stringValue;
    const separator = new Controller();

    inputs.customSeparator = separator.extractCustomSeparator(inputs.inputValue);

    // error 예외사항 차 후 Error 기능 개발할 때 이용해야 함
    if(inputs.customSeparator === "") {
      Console.print("이것은 기본 구문자 입니다.");
    }

    Console.print(inputs.inputValue);
    Console.print(inputs.customSeparator);
  }
}

export default App;
