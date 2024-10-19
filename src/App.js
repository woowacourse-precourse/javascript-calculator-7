import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const input = await Console.readLineAsync(
        '덧셈할 문자열을 입력해 주세요.\n'
      );
      Console.print(input);
    } catch (error) {
      Console.print('에러:', error);
    }
  }
}

export default App;
