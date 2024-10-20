import { getInput } from './getInput.js';
import { add } from './add.js';
import { printResult } from './printResult.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const input = await getInput();
      const result = add(input);
      printResult(result);
    } catch (error) {
      Console.print(`${error.message}`);
      throw error; // 예외를 다시 던져서 테스트에서 잡히도록 처리
    }
  }
}

export default App;
