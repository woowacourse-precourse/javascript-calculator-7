import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    // 1. 사용자에게 문자열을 입력 받는다.
    const STR = await this.readLine('덧셈할 문자열을 입력해 주세요.\n');
  }

  /**
   * message를 출력하고 사용자의 입력을 받는다.
   * @param message
   * @return {Promise<string>} 사용자의 입력값
   */
  readLine(message) {
    return Console.readLineAsync(message);
  }
}

export default App;
