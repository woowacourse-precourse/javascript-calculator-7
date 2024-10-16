import { Console } from '@woowacourse/mission-utils';
import parseString from './parser.js';
import handleError from './handleError.js';

class App {
  async run() {
    try {
      const str = await Console.readLineAsync(
        '덧셈할 문자열을 입력해 주세요.\n',
      );
      return parseString(str);
    } catch (error) {
      handleError(error);
    }
  }
}

export default App;
