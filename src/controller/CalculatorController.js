import Input from '../view/Input.js';
import Output from '../view/Output.js';
import Calculator from '../model/Calculator.js';

class CalculatorController {
  /**
   * @param {string} input
   * @returns {number}
   */
  process(input) {
    const calc = new Calculator(input);
    return calc.compute();
  }

  /**
   * @returns {Promise<void>}
   */
  async run() {
    const inputValue = await Input.readLine();
    const result = this.process(inputValue);
    Output.printResult(result);
  }
}

export default CalculatorController;
