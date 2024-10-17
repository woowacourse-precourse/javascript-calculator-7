import StringCalculator from "../domain/StringCalculator.js";
import InputValidator from "../util/InputValidator.js";
import View from "../view/View.js";

class StringCalculatorController {
    constructor() {
        this.calculator = new StringCalculator();
    }

    async startCalculation() {
        try {
            const input = await View.readInputStirng();
            const numbers = InputValidator.validateInputString(input);
            const result = this.calculator.calculate(numbers);
            View.printResult(result);
        } catch (error) {
            View.printErrorMessage(error.message);
            throw error; // 예외를 다시 던져서 테스트에서 감지할 수 있게 함
        }
    }
}

export default StringCalculatorController;