import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const str = await Console.readLineAsync(
        '덧셈할 문자열을 입력해 주세요.\n',
      );

      const splited = str.split(/,|:/);
      const nums = splited.map(Number);

      Console.print(nums);
    } catch (error) {
      // Todo... error 처리
      // console.error(error);
    }
  }
}

export default App;
