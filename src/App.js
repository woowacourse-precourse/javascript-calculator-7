import { Console } from '@woowacourse/mission-utils';
import StringPlusCalculator from './calculator/StringPlusCalculator';

class App {
  async run() {
    try {
      const input =
        await Console.readLineAsync('덧셈할 문자열을 입력해주세요.\n');
      const calculate = new StringPlusCalculator();
      calculate.calculate(input);
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default App;
