import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import Calculator from "../domain/StringCalculator.js";
import Validation from "../domain/StringValidation.js";
import { ERROR_CODES, ERROR_MESSAGES, VALID_STRING_CODE } from "../constants/constants.js";

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
      // OutputView.printResultValue(`디버깅용 코드: ${code} ${inputValue}\n`);

      // 문자열에서 구분자를 통해 숫자 추출하고 더한 값 반환하여 resultValue에 저장
      // const resultValue = this.calculator.getCalculatorResult(inputValue);

      // 화면 출력
      // OutputView.printResultValue(resultValue);
    }
  }
}

export default Controller;