import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const str = await Console.readLineAsync(
        '덧셈할 문자열을 입력해 주세요.\n',
      );
      Console.print(str); // 입력받은 문자열 확인
    } catch (error) {
      // Todo... error 처리
      // console.error(error);
    }
  }
}

export default App;
