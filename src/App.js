import { Console } from "@woowacourse/mission-utils";
import Model from "./model.js";
import Controller from "./controller.js";
import Test from "./test.js";

class App {

  async run() {
    /*const inputValue = await Console.readLineAsync(
        '덧셈할 문자열을 입력해 주세요. \n'
    );*/
    const test = new Test();

    const inputValue = test.customInputExample();
    const inputString = new Model();
    inputString.updateData(inputValue);

    const input = inputString.stringValue;
    const Control = new Controller();

    input.customSeparator = Control.extractCustomSeparator(input.inputValue);
    input.numberList = Control.CommonSeparatorSplit(input.inputValue, input.customSeparator);

    // error 예외사항 차 후 Error 기능 개발할 때 이용해야 함
    if(input.customSeparator === "") {
      Console.print("이것은 기본 구문자 입니다.");
    }

    const sum = Control.sumCalculatorList(input.numberList);

    Console.print(`입력한 값: ${input.inputValue}`);
    Console.print(`커스텀 구분자: ${input.customSeparator}`);
    Console.print(`분할된 숫자 리스트: ${input.numberList}`);
    Console.print(`연산 결과 : ${sum}`);
  }
}

export default App;
