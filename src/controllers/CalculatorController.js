import Delimiter from "../models/Delimiter.js";
import { InputView } from "../views/InputView.js";

/**
 * 문자열 덧셈 계산기 Controller js
 */
class CalculatorController {

    #delimiter;

    async calculatorProcess() {
        await this.getDelimiter();
    }

    async getDelimiter() {
        const inputText = await InputView.getNumbersFromInput();
        this.#delimiter = Delimiter.getDelimiter(inputText);
    }
}

export default CalculatorController;