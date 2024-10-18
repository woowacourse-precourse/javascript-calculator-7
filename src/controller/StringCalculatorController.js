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
            OutputView.printResult(result);
        } catch (error) {
            OutputView.printErrorMessage(error.message);
            throw error; // 예외를 다시 던져서 테스트에서 감지할 수 있게 함
        }
    }
}

export default StringCalculatorController;