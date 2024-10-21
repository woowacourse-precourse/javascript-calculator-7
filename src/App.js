import { Console } from '@woowacourse/mission-utils';
import { MESSAGE, DEFAULT_DELIMITERS, REGEX } from './constant.js';

class App {
  async getInput() {
    return await Console.readLineAsync(`${MESSAGE.INPUT}`);
  }

  splitInputParts(input) {
    if (input.startsWith('//')) {
      const endIndex = input.indexOf('\\n');
      const customDelimiterPart = input.slice(0, endIndex + 2);
      const numberPart = input.slice(endIndex + 2);

      return { customDelimiterPart, numberPart };
    }

    return { customDelimiterPart: null, numberPart: input };
  }

  getDelimiters(customDelimiterPart) {
    const delimiters = [...DEFAULT_DELIMITERS];

    if (customDelimiterPart) {
      const match = customDelimiterPart.match(REGEX.CUSTOM);

      if (match) {
        const [_, customDelimiter] = match;
        delimiters.push(customDelimiter);
      }
    }

    return delimiters;
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

    const { customDelimiterPart, numberPart } = this.splitInputParts(input);
    const delimiters = this.getDelimiters(customDelimiterPart);
    const numbers = this.parseInput(numberPart, delimiters);

    const sum = this.calculateSum(numbers);
    this.printResult(sum);
  }
}

export default App;
