import Calculator from "../models/Calculator.js";
import Delimiter from "../models/Delimiter.js";
import { InputView } from "../views/InputView.js";

/**
 * 문자열 덧셈 계산기 Controller js
 */
class CalculatorController {

    #delimiter;

    #sum;

    async calculatorProcess() {
        await this.getDelimiter();
        await this.getSumNumbers();
    }

    async getDelimiter() {
        const inputText = await InputView.getNumbersFromInput();
        this.#delimiter = Delimiter.getDelimiter(inputText);
    }

    async getSumNumbers() {
        this.#sum = Calculator.getSumCalculator(this.#delimiter);
    }
}

export default CalculatorController;