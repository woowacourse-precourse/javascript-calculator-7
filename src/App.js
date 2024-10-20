import { Console } from '@woowacourse/mission-utils';
import Calculator from './Calculator';
import { isEmptyOrNull, throwError } from './utils';

class App {
  #sum;
  #input;

  async run() {
    try {
      this.#input = await App.#getUserInput();
      this.#checkIsEmptyAndCalculate();
      this.#printResult();
    } catch (err) {
      throwError(err);
    }
  }

  static async #getUserInput() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    return input.trim();
  }

  #checkIsEmptyAndCalculate() {
    if (isEmptyOrNull(this.#input)) {
      this.#sum = 0;
    } else {
      const calculator = new Calculator(this.#input);
      this.#sum = calculator.calculate();
    }
  }

  #printResult() {
    Console.print(`결과 : ${this.#sum}`);
  }
}

export default App;
