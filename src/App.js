import StringCalculatorManager from "./StringCalculatorManager.js"
import InputHandler from "./InputHandler.js"
import Calculator from "./Calculator.js"
import OutputHandler from "./OutputHandler.js"

class App {
  async run() {
    const inputHandler = new InputHandler();
    const calculator = new Calculator();
    const outputHandler = new OutputHandler();

    const calculatorManager = new StringCalculatorManager(inputHandler, calculator, outputHandler);

    calculatorManager.start();
  }
}

export default App;
