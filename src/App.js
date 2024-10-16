import { Console } from '@woowacourse/mission-utils';
import parseString from './Parser/MainParser/parser.js';
import handleError from './Error/handleError.js';

class App {
  async run() {
    try {
      const str = await Console.readLineAsync(
        '덧셈할 문자열을 입력해 주세요.\n',
      );
      const result = parseString(str);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default App;
