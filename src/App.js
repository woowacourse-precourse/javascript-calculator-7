import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const input = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n'
    );
    try {
      // 빈 문자열일 경우
      if (input == '') {
        Console.print('결과 : 0 ');
      }

      // 기본 구분자
      let sum = 0;
      const result = input.split(/,|;/g);
      result.forEach((item) => {
        sum += parseInt(item);
      });
      Console.print(`결과 : ${sum}`);

      // 커스텀 구분자
    } catch (error) {
      Console.print(`[ERROR] ${error}`);
    }
  }
}
export default App;
