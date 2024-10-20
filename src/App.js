import { getInput } from './functions/getInput.js';
import { add } from './functions/add.js';
import { printResult } from './functions/printResult.js';
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
