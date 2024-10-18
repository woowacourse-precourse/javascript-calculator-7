import {
  findCustomDelimiter,
  splitWithCustomDelimiter,
} from './utils/split.js';
import { enter, print } from './utils/console.js';
import {
  isPositive,
  isValidDelimiterLength,
  isValidNumberArray,
} from './utils/validation.js';

class App {
  async run() {
    const input = await enter('덧셈할 문자열을 입력해 주세요.\n');
    this.#tokenizer(input);
  }

  #tokenizer(input) {
    const { customDelimiter, numberStr } = findCustomDelimiter(input, [
      isValidDelimiterLength,
    ]);
    const numbers = splitWithCustomDelimiter(customDelimiter, numberStr, [
      isPositive,
      isValidNumberArray,
    ]);
    this.#calculate(numbers);
  }

  #calculate(numbers) {
    const sum = numbers.reduce((acc, cur) => acc + cur, BigInt(0));
    this.#result(sum);
  }

  #result(sum) {
    print(`결과 : ${sum}`);
  }
}

export default App;
