import StringCalculator from "../models/StringCalculator.js";


class CalculatorController {
    constructor(InputView, OutputView){
        this.inputView = InputView;
        this.outputView = OutputView;
        this.calculator = new StringCalculator();
    }

    async run(){
        try {
            const input = await this.inputView.getInput();
            const result = this.calculator.calculate(input);
            this.outputView.printResult(result);
        }
        catch(error){
            throw error;
        }
    }
}

export default CalculatorController;