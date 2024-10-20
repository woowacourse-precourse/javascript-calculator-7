import { getInput, printResult, printError } from './io_module.js';
import Calculator from './calculator.js';

class App {
  async run() {
    try {
      const input = await getInput('덧셈할 문자열을 입력해 주세요.\n');
      const result = this.calculateResult(input);
      printResult(result);
    } catch (error) {
      printError(error);
      throw error;
    }
  }

  calculateResult(input) {
    const calculator = new Calculator(input);
    return calculator.calculate();
  }
}

export default App;
