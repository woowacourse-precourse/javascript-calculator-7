import { Console } from '@woowacourse/mission-utils';
import { CALCULATION_MESSAGE } from './constants.js';
import Parser from './calculate.js';

class App {
  async run() {
    try {
      // "덧셈할 문자열을 입력해 주세요." 메시지 출력
      Console.print(CALCULATION_MESSAGE.START_CALCULATION);
      // 사용자로부터 값을 입력받기
      const input = await Console.readLineAsync('');

      let sum = 0;
      // 빈 문자열 체크
      if (!input) {
        Console.print(`결과 : ${sum}`);
        return;
      }

      const parsedResult = Parser.parseInput(input);

      // 결과 출력
      Console.print(`결과 : ${parsedResult}`);
    } catch (error) {
      Console.print(error.message);
      throw error
    }
  }
}
const app = new App();

export default App;
