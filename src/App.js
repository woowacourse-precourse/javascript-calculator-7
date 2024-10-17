import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const input =
        await Console.readLineAsync('덧셈할 문자열을 입력해주세요.\n');
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default App;
