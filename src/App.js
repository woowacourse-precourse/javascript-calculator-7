import { Console } from '@woowacourse/mission-utils';
import splitInput from './InputSplitter.js';
import numberCalculator from './NumberCalculator.js';

class App {
  async run() {
    const input =
      await Console.readLineAsync('계산할 문자열을 입력해 주세요\n');
    if (!input) {
      throw new Error('[ERROR] 문자열이 입력되지 않았습니다.');
    }

    const numbers = splitInput(input);
    const result = numberCalculator(numbers);

    Console.print(`결과 : ${result}`);
  }
}

export default App;
