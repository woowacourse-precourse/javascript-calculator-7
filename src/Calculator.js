import extractNumbersFromInput from "./controller/input/extractNumbersFromInput.js";
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
    const { numbers, delimiter } = extractNumbersFromInput(input);
    console.log(numbers);
    console.log(delimiter);
  }
}

export default Calculator;
