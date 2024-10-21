export default class CalculationService{
  #ioHandler;
  #parser;
  #Calculator;

  constructor(ioHandler, parser, calculator) {
    this.#ioHandler = ioHandler;
    this.#parser = parser;
    this.#Calculator = calculator;
  }

  async execute() {
    const rawInput = await this.#ioHandler.getInput();
    const parsedInput = this.#parser.parse(rawInput);
    const result = this.#Calculator.executeCalculation(parsedInput);
    this.#ioHandler.displayResult(result);
  }
}
