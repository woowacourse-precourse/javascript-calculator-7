class CalculatorController {
  constructor(calculator, inputParser, view) {
    this.calculator = calculator;
    this.inputParser = inputParser;
    this.view = view;
  }

  async run() {
    const input = await this.view.readInput();
    const numbers = this.inputParser.parse(input);
    const result = this.calculator.sum(numbers);
    this.view.displayResult(result);
  }
}

export default CalculatorController;
