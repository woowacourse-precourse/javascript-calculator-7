import { Console } from "@woowacourse/mission-utils";
import View from "./View.js";
import Model from "./Model.js";
import Controller from "./controller.js";
import Test from "./Test.js";
import Exception from "./Exception.js";

class App {

  async run() {
    const view = new View();
    const exception = new Exception();
    const control = new Controller();

    const inputValue = await view.getInput();

    /* 정해진 입력 값 형식을 받았을 경우 출력 결과를 확인하기 위한 테스트 */
    //const test = new Test();
    const inputString = new Model();

    inputString.updateData(inputValue);

    const input = inputString.stringValue;
    input.customSeparator = control.extractCustomSeparator(input.inputValue);
    exception.separatorLengthError(input.customSeparator);

    input.numberList = control.CommonSeparatorSplit(input.inputValue, input.customSeparator);
    control.defaultNum(input.numberList, input.inputValue);

    control.defaultNum(input.customSeparator, input.inputValue);

    const sum = control.sumCalculatorList(input.numberList);

    view.resultPrint(sum);
  }
}

export default App;
