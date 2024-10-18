import splitWithCustomDelimiter from './utils/split.js';
import { enter, print } from './utils/console.js';

class App {
  async run() {
    const input = await enter('덧셈할 문자열을 입력해 주세요.\n');

    this.#calculate(input);
  }

  #calculate(input) {
    const numbers = splitWithCustomDelimiter(input);
    const sum = numbers.reduce((acc, cur) => acc + cur, BigInt(0));

    print(`결과 : ${sum}`);
  }
}

export default App;
