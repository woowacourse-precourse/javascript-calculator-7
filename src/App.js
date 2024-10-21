import { Console } from '@woowacourse/mission-utils';
import { CALCULATION_MESSAGE } from './constants.js';

class App {
  async run() {
    // "덧셈할 문자열을 입력해 주세요." 메시지 출력
    Console.print(CALCULATION_MESSAGE.START_CALCULATION);

    // 사용자로부터 값을 입력받기 (비동기 처리)
    const input = await Console.readLineAsync('');
  }
}

const app = new App();
app.run();
