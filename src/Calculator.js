import extractNumbersFromInput from "./controller/input/extractNumbersFromInput.js";
import validateInput from "./controller/input/validateInput.js";
import getInput from "./ui/getInput.js";
import printStartMessage from "./ui/PrintStartMessage.js";

class Calculator {
  main() {
    this.start();
  }

  start() {
    printStartMessage();
    this.handleInput();
  }

  async handleInput() {
    const input = await getInput();
    validateInput(input);
    const { numbers, delimiter } = extractNumbersFromInput(input);
  }
}

export default Calculator;
