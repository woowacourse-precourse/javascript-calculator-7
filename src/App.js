import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const USER_INPUT = (
      await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n')
    ).trim();

    const USER_INPUT_NUMBER = USER_INPUT.split(/[,:]/);
    // 콤마, 클론을 기준으로 구분

    // 확인
    Console.print(USER_INPUT_NUMBER);
  }
}

export default App;
