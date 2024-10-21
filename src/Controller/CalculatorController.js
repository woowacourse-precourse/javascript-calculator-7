class CalculatorController {
  constructor(calculator, inputParser, view) {
    this.calculator = calculator;
    this.inputParser = inputParser;
    this.view = view;
  }

  async run() {
    try {
      const input = await this.view.readInput();
      const numbers = this.inputParser.parse(input);
      const result = this.calculator.calculate(numbers);
      this.view.displayResult(result);
    } catch (error) {
      this.view.displayError(error.message);
    }
  }
}

export default CalculatorController;
