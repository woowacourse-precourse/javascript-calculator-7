import { Console } from '@woowacourse/mission-utils';
import Calculator from './Calculator.js';

class App {
  #input;
  #calculator;

  async run() {
    this.#input = await this.#readUserInput();
    this.#calculator = new Calculator(this.#input);
    this.#calculator.calculateStringSum();
  }

  async #readUserInput() {
    return await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
  }
}

export default App;
