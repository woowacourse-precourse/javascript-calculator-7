import { Console } from '@woowacourse/mission-utils';
import ParseStr from './Utils/ParseStr.js';

class App {
  async run() {
    await Console.print('덧셈할 문자열을 입력해 주세요.');
    const PARSE_STR = await Console.readLineAsync('');
    const RESULT = ParseStr(PARSE_STR);
    await Console.print(`결과 : ${RESULT}`);
  }
}

export default App;
