import Input from "../view/Input.js";
import Output from "../view/Output.js";

export default class CalculatorController {
  /**
   * @param {string} input 
   * @returns {number}
   */
  process(input) {
    return Number(input);
  }

  async run() {
    const inputValue = await Input.readLine();
    const result = this.process(inputValue);
    Output.printResult(result);
  }
}