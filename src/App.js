import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { Console } = require('@woowacourse/mission-utils');

class App {
  run() {
    return Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n')
      .then((input) => {
        const result = this.calculate(input);
        Console.print(결과 : ${ result });
      })
      .catch((error) => {
        Console.print(error.message);
        throw error;
      });
  }

  calculate(input) {
    const numbers = this.parseNumbers(input);
    return numbers.reduce((sum, num) => sum + num, 0);
  }

  parseNumbers(input) {
    let delimiters = [',', ':'];
    let numbersString = input;

  }
}

export default App;