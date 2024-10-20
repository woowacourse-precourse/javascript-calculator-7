import CalculatorProcess from './CalculatorProcess.js';

class Calculator {
  process = null;

  async run() {
    this.process = new CalculatorProcess();
    await this.executeProcess();
  }

  async executeProcess() {
    await this.process.getString();
    this.process.doParsing();
    this.process.operatingNums();
    this.process.printResult();
  }
}

export default Calculator;
