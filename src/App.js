import { Console } from '@woowacourse/mission-utils';
import sumNums from './sum.js';
import extractNum from './extractNum.js';

const testExtract = '//;\n1;2;3';

class App {
  async run() {
    try {
      // 입력
      Console.print('덧셈할 문자열을 입력해 주세요.');
      const input = await Console.readLineAsync('');
      // 숫자 추출
      const nums = extractNum(input);
      // 숫자 합
      const sum = sumNums(nums);
      Console.print(`결과 : ${sum}`);
    } catch (error) {
      throw new Error('[ERROR]');
    }
  }
}

export default App;
