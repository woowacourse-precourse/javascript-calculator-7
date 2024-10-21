import { Console } from '@woowacourse/mission-utils';
import { CALCULATION_MESSAGE, ERROR_MESSAGE } from './constants.js';
import Parser from './parsing.js';

class App {
  async run() {
    try {
      // "덧셈할 문자열을 입력해 주세요." 메시지 출력
      Console.print(CALCULATION_MESSAGE.START_CALCULATION);

      // 사용자로부터 값을 입력받기
      const input = await Console.readLineAsync('');

      // 빈 문자열 체크
      if (!input) {
        throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
      }

      // 입력에 숫자가 하나도 없거나, 쉼표와 콜론 둘 다 없을 때: 에러 발생
      const containsNumbers = /\d/.test(input); // 숫자 포함 여부
      const containsDelimiters = /[,:]/.test(input); // 쉼표 또는 콜론 포함 여부

      if (!containsNumbers || !containsDelimiters) {
        throw new Error(ERROR_MESSAGE.INVALID_INPUT);
      }

      // 유효한 입력에 대해 파싱 진행
      const parsedResult = Parser.parseInput(input);

      // 결과 출력
      Console.print(`결과:`);
    } catch (error) {
      Console.print(error.message);
    }
  }
}
const app = new App();
app.run();
