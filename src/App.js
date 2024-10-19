import { Console } from '@woowacourse/mission-utils';
class App {
  async run() {
    try {
      const input = await Console.readLineAsync(
        '덧셈할 문자열을 입력해 주세요.\n',
      );
      Console.print(`\n입력한 문자열 : ${input}`);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
