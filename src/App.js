import { Console } from '@woowacourse/mission-utils';
import StringCalculator from './StringCalculator.js';

class App {
  run() {
    Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n')
      .then((input) => {
        const stringCalculator = new StringCalculator();
        try {
          const result = stringCalculator.add(input);
          Console.print(`결과 : ${result}`);
        } catch (error) {
          Console.print(error.message);
        }
      });
  }
}

export default App;
