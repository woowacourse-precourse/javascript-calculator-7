import StringCalculator from "../domain/StringCalculator.js";
import InputValidator from "../util/InputValidator.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class StringCalculatorController {
    constructor() {
        this.calculator = new StringCalculator();
    }

    async startCalculation() {
        try {
            const input = await InputView.readInputStirng();
            const numbers = InputValidator.validateInputString(input);
            const result = this.calculator.calculate(numbers);
            await OutputView.printResult(result);
        } catch (error) {
            await OutputView.printErrorMessage(error.message);
            throw error;
        }
    }
}

export default StringCalculatorController;