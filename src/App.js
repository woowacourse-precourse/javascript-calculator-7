import Calculator from './controller/Calculator.js';

class App {
  constructor() {
    this.calculator = new Calculator();
  }
  async run() {
    this.calculator.start();
  }
}

export default App;
