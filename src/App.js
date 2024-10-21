import CalculationService from './application/CalculationService.js';
import Calculator from './domain/Calculator.js';
import IOHandler from './presentation/IOHandler.js';
import Parser from './application/parser/Parser.js';

class App {
  #calculationService;

  constructor() {
    const ioHandler = IOHandler;
    const parser = new Parser();
    const calculator = new Calculator();
    this.#calculationService = new CalculationService(ioHandler, parser, calculator);
  }

  async run() {
    await this.#calculationService.execute();
  }
}

export default App;
