import { Console } from "@woowacourse/mission-utils";

class InputView {
  constructor(controller) {
    this.controller = controller;
  }
  async getInputText() {
    const textInput = await Console.readLineAsync(
      "계산할 문자열을 입력해 주세요 :"
    );
    return textInput;
  }
}

export default InputView;
