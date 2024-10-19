class StringCalculatorManager {
  constructor(inputHandler, calculator, outputHandler) {
    this.inputHandler = inputHandler;
    this.outputHandler = outputHandler;
    this.calculator = calculator;
  }

  async start() {
    this.outputHandler.printStartMessage();
    this.inputString = await this.inputHandler.readString();
  }
}

export default StringCalculatorManager;