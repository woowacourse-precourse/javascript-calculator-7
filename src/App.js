import Calculator from './Calculator.js';

class App {
  constructor() {
    this.calculator = new Calculator();  
  }

  async run() {
    await this.calculator.run();  
  }
}

export default App;
