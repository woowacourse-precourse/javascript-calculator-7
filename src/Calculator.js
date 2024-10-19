import CalculatorProcess from './CalculatorProcess.js';

class Calculator {
  process = null;

  async run() {
    this.process = new CalculatorProcess();
    await this.executeProcess();
  }

  async executeProcess() {
    await this.process.getString();
  }
}

export default Calculator;
