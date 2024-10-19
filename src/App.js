import { Console } from '@woowacourse/mission-utils';

const INPUT_MESSAGE = '덧셈할 문자열을 입력해 주세요.\n';
class App {
  async run() {
    const input = await Console.readLineAsync(INPUT_MESSAGE);
    Console.print(input);
  }
}

export default App;
