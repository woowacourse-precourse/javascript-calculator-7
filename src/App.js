import { Console } from "@woowacourse/mission-utils";
import View from "./view.js";
import Model from "./model.js";
import Controller from "./controller.js";
import Test from "./test.js";

class App {

  async run() {
    const view = new View();
    /* 정해진 입력 값 형식을 받았을 경우 출력 결과를 확인하기 위한 테스트 */
    // const test = new Test();

    const inputValue = await view.getInput();
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

    view.resultPrint(sum);

    Console.print(`입력한 값: ${input.inputValue}`);
    Console.print(`커스텀 구분자: ${input.customSeparator}`);
    Console.print(`분할된 숫자 리스트: ${input.numberList}`);
  }
}

export default App;
