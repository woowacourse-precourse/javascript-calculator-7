import { Console } from '@woowacourse/mission-utils';
import { MESSAGE, DEFAULT_DELIMITERS } from './constant.js';

class App {
  async getInput() {
    return await Console.readLineAsync(`${MESSAGE.INPUT}`);
  }

  getDelimiters() {
    return DEFAULT_DELIMITERS;
  }

  createRegex(delimiters) {
    return new RegExp(`[${delimiters.join('')}]`);
  }

  parseInput(input, delimiters) {
    if (!input.trim()) {
      return [];
    }
    const regex = this.createRegex(delimiters);

    return input.split(regex).map(Number);
  }

  calculateSum(numbers) {
    if (numbers.length === 0) {
      return 0;
    }

    return numbers.reduce((acc, cur) => acc + cur, 0);
  }

  printResult(result) {
    Console.print(`${MESSAGE.PRINT}${result}`);
  }

  async run() {
    const input = await this.getInput();
    const delimiters = this.getDelimiters();
    const numbers = this.parseInput(input, delimiters);
    const sum = this.calculateSum(numbers);
    this.printResult(sum);
  }
}

export default App;
