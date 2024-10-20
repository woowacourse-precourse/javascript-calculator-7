import StringCalculator from '../models/StringCalculator.js';
import InputView from '../views/InputView.js';

class CalculatorController {
  static async run() {
    const input = await InputView.getInput();
    return StringCalculator.calculate(input);
  }
}

export default CalculatorController;
