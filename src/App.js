import { Console } from '@woowacourse/mission-utils';

class App {
  // 입력 문자열 받아오기
  async getString() {
    return Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
  }

  async run() {
    try {
      const input = await this.getString();
      console.log(input);
    } catch (error) {
      console.error(error);
    } finally {
    }
  }
}

export default App;
