import { readUserInput } from './utils/readUserInput.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const input = await readUserInput('덧셈할 문자열을 입력해 주세요.');

      Console.print(`결과 : ${input}`);
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
