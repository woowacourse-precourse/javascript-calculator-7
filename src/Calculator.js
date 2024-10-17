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
    console.log(input);
  }
}

export default Calculator;
