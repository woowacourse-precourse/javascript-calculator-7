import { Console } from '@woowacourse/mission-utils';
import parseString from './Parser/parser.js';
import { SYSTEM_MESSAGES } from './Constraints/Constraints.js';

class App {
  async run() {
    const str = await Console.readLineAsync(SYSTEM_MESSAGES.ASK_USER_INPUT);
    const result = parseString(str);
    Console.print(`${SYSTEM_MESSAGES.PARSE_RESULT}${result}`);
  }
}

export default App;
