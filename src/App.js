import Calculator from './Calculator.js';

class App {
  calculator = null;

  async run() {
    this.calculator = new Calculator();
    await this.calculator.run();
  }
}

export default App;
