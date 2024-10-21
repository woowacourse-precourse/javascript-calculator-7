import { runCalculator } from './Calculator.js';

class App {
  async run() {
    // Calculator 실행
    try {
      await runCalculator();
    } catch (error) {
      throw error;
    }
  }
}

export default App;