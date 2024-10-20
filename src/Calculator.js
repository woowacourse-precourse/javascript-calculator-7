import extractNumbersFromInput from "./controller/input/extractNumbersFromInput.js";
import validateInput from "./controller/input/validateInput.js";
import getInput from "./ui/getInput.js";
import printResult from "./ui/printResult.js";

class Calculator {
  async main() {
    await this.handleInput();
  }

  async handleInput() {
    const input = await getInput();
    validateInput(input);
    const { numbers } = extractNumbersFromInput(input);
    printResult(numbers);
  }
}

export default Calculator;
