import Calculator from './utils/calculator.js';

class App {
  async run() {
    try {
      await Calculator.calculate();
    } catch (err) {
      throw err;
    }
  }
}

export default App;
