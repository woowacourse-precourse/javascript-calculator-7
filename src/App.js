import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const answer = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');
      Console.print(`결과 : ${answer}`);
    } catch (error) {
      // reject 되는 경우
      Console.print(`에러 발생: ${error.message}`);
    }
  }
}

export default App;