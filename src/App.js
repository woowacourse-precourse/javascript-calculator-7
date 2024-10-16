import { Console } from '@woowacourse/mission-utils';
import StringCalculator from './StringCalculator';

class App {
  async run() {
    const input = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n',
    );

    const stringCalculator = new StringCalculator();

    stringCalculator.calculation(input);
  }
}

export default App;
