import { Console } from '@woowacourse/mission-utils';
import parseString from './Parser/parser.js';
import { SYSTEM_MESSAGES } from './Constraints/Constraints.js';

class App {
  async run() {
    const input = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n',
    );
    if (input === '') {
      return Console.print('결과: 0');
    }
    const result = parseString(input);
    return Console.print(`${SYSTEM_MESSAGES.PARSE_RESULT}${result}`);
  }
}

export default App;
