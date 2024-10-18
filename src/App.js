import { Console } from '@woowacourse/mission-utils';
import parseInput from './parseInput.js';
import sumInput from './sumInput.js'

class App {
  async run() {
    Console.print('문자열 덧셈 계산기가 실행되었습니다.');

    try {
      const inputStr = await Console.readLineAsync('덧셈할 문자열을 입력해주세요.\n> ');
      if (inputStr.length <= 0 || inputStr == null) {
        throw new Error('[ERROR] 입력값이 비었습니다.');
      }

      const parseNum = await parseInput(inputStr);
      const sumNum = await sumInput(parseNum);

      Console.print('결과 : ' + sumNum);

    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;

