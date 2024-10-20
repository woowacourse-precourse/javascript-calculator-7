import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const input = await Console.readLineAsync(
        '덧셈할 문자열을 입력해 주세요.\n',
      );

      let nums = [];
      if (input.length === 0) {
        nums.push(0);
      }
    } catch (error) {}
  }
}

export default App;
