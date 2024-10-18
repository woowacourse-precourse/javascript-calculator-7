import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import Calculator from "../domain/StringCalculator.js";
import Validation from "../domain/StringValidation.js";
import { ERROR_CODES, VALID_STRING_CODE } from "../constants/constants.js";

class Controller {
  constructor() {
    // this.calculator = new Calculator();
  }

  async start() {
    // 사용자 입력
    const inputValue = await InputView.readStringInput();
    
    // 예외 처리 검사
    const code = Validation.validate(inputValue);

    if (code === ERROR_CODES.EMPTY_STRING) OutputView.printResultValue(0);
    else if (code !== VALID_STRING_CODE) OutputView.printErrorMessage(code);
    else {
      // const resultValue = this.calculator.getCalculatorResult(inputValue);

      // 화면 출력
      // OutputView.printResultValue(resultValue);
    }
  }
}

export default Controller;