import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import Calculator from "../domain/StringCalculator.js";
import Validation from "../domain/StringValidation.js";
import { ERROR_CODES, VALID_STRING_CODE } from "../constants/constants.js";

class Controller {
  async start() {
    const inputValue = await InputView.readStringInput();
    const code = Validation.validate(inputValue);

    if (code === ERROR_CODES.EMPTY_STRING) OutputView.printResultValue(0);
    else if (code !== VALID_STRING_CODE) OutputView.printErrorMessage(code);
    else {
      const calculator = new Calculator(inputValue);
      const resultValue = calculator.getCalculatorResult();
      OutputView.printResultValue(resultValue);
    }
  }
}

export default Controller;