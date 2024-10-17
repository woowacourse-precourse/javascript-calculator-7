import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    Console.print('문자열 덧셈 계산기가 실행되었습니다.');

    try {
      const inputNum = await Console.readLineAsync('덧셈할 문자열을 입력해주세요.\n> ');
      if (inputNum.length <= 0 || inputNum == null) {
        throw new Error('[ERROR] 입력값이 비었습니다.');
      }

      Console.print(inputNum);

    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;

