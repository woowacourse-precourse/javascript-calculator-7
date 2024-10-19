import { Console } from '@woowacourse/mission-utils';
class App {
  async run() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    try {
      const result = this.add(input);
      Console.print(`결과 : ${result}`);
    } catch (err) {
      Console.print(error.message);
    }
  }
  add(input) {}
}

export default App;
