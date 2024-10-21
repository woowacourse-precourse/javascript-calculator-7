export default class CalculationService {
  #ioPort;

  #parser;

  #Calculator;

  constructor(ioPort, parser, calculator) {
    this.#ioPort = ioPort;
    this.#parser = parser;
    this.#Calculator = calculator;
  }

  async execute() {
    const rawInput = await this.#ioPort.getInput();
    const parsedInput = this.#parser.parse(rawInput);
    const result = this.#Calculator.executeCalculation(parsedInput);
    this.#ioPort.displayResult(result);
  }
}
