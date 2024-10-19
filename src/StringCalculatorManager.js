class StringCalculatorManager {
  constructor(inputHandler, calculator, outputHandler) {
    this.inputHandler = inputHandler;
    this.outputHandler = outputHandler;
    this.calculator = calculator;
  }

  start() {
    this.outputHandler.printStartMessage();
  }
}

export default StringCalculatorManager;