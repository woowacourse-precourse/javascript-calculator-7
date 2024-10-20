import { InputView } from "../views/InputView.js";

/**
 * 문자열 덧셈 계산기 Controller js
 */
class CalculatorController {

    async calculatorProcess() {
        await this.getDelimiter();
    }

    async getDelimiter() {
        const inputText = await InputView.getNumbersFromInput();
    }
}

export default CalculatorController;