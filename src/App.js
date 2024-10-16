import { Console } from '@woowacourse/mission-utils';
import { CALCULATOR_MESSAGE } from './constants.js';

class App {
  async run() {
    await this.enterInput();
    this.calculateResult();
    this.printResult();
  }

  async enterInput() {
    Console.print(CALCULATOR_MESSAGE.CALCULATOR_START);
    this.input = await Console.readLineAsync('');
  }

  splitInput() {
    if (this.input.startsWith('//')) {
      const [customDelimiter, separatedInput] = this.input
        .slice(2)
        .split('\\n');
      return separatedInput.split(customDelimiter);
    }

    return this.input.split(/,|:/);
  }

  calculateResult() {
    const numbers = this.splitInput();
    this.sum = numbers.reduce((acc, cur) => acc + Number(cur), 0);
  }

  printResult() {
    Console.print(CALCULATOR_MESSAGE.CALCULATOR_RESULT + this.sum);
  }
}

export default App;
