import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { Console } = require('@woowacourse/mission-utils');

class App {
  run() {
    return Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n')
      .then((input) => {
        const numbers = this.parseNumbers(input);
        Console.print(입력된 숫자들 : ${ numbers });
      })
      .catch((error) => {
        Console.print(error.message);
        throw error;
      });
  }

  parseNumbers(input) {
    let delimiters = [',', ':'];
    let numbersString = input;

  }
}

export default App