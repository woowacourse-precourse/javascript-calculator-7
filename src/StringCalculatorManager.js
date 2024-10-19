class StringCalculatorManager {
  constructor(inputHandler, calculator, outputHandler) {
    this.inputHandler = inputHandler;
    this.outputHandler = outputHandler;
    this.calculator = calculator;
  }

  async start() {
    try {
      this.outputHandler.printStartMessage();
      this.inputString = await this.inputHandler.readString();
      const results = this.calculator.calculate(this.inputString);
      this.outputHandler.printResult(results);
    } catch (error) {
      this.outputHandler.printErrorMessage(error.message);
    }
  }
}

export default StringCalculatorManager;