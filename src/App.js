import { Console } from '@woowacourse/mission-utils';
import { SYSTEM_MESSAGES } from './Constraints/Constraints';
import parseString from './Parser/parser.js';

class App {
  async run() {
    const input = await Console.readLineAsync(SYSTEM_MESSAGES.ASK_USER_INPUT);

    const result = parseString(input);
    return Console.print(`${SYSTEM_MESSAGES.PARSE_RESULT}${result}`);
  }
}

export default App;
