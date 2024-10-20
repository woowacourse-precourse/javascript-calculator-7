import { Console } from '@woowacourse/mission-utils';
import Calculator from './Calculator.js';
import Parser from './Parser.js';

class App {
  constructor() {
    this.parser = new Parser();
  }

  async run() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    const { separators, mainString } = this.parser.parseInput(input);
    const numbers = Calculator.splitNumbers(mainString, separators);
    const result = Calculator.sumNumbers(numbers);
    Console.print(`결과 : ${result}`);
  }
}

export default App;
