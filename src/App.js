import { Console } from '@woowacourse/mission-utils';
import StringPlusCalculator from './calculator/StringPlusCalculator.js';

class App {
  async run() {
    try {
      const input =
        await Console.readLineAsync('덧셈할 문자열을 입력해주세요.\n');
      const stringPlusCalculator = new StringPlusCalculator();
      Console.print(`결과 : ${stringPlusCalculator.calculate(input)}`);
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default App;
