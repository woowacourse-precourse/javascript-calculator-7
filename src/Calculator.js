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
    const extractNum = extractNumbersFromInput(input);
    console.log(extractNum);
  }
}

export default Calculator;
