import { Console } from "@woowacourse/mission-utils";

class TextInputView {
  constructor(controller) {
    this.controller = controller;
  }
  async getInputText() {
    const textInput = await Console.readLineAsync(
      `계산할 문자열을 입력해 주세요 :
      1) 일반 계산 예시 : 1;2,3 / 1,2,3
      2) 커스텀 구분자 입력 예시 : //*\\n1*2*3\n\n`
    );
    this.isValidateInput(textInput);
    return textInput;
  }

  isValidateInput(textInput) {
    if (textInput === "") {
      throw Error("[ERROR] 문자열을 입력해 주세요.");
    }
  }
}

export default TextInputView;
