import { Console } from '@woowacourse/mission-utils';
import { validateInput } from './is_valid.js';
import { parseInputWithDelimiter } from './delimiter_parser.js';
import { sum } from './calculator.js';

class App {
  async run() {
    try {
      const USER_INPUT = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      validateInput(USER_INPUT);

      const PARSED_INPUT = parseInputWithDelimiter(USER_INPUT);
      const RESULT = sum(PARSED_INPUT);

      Console.print(`결과 : ${RESULT}`);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
