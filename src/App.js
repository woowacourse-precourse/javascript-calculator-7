import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      // 사용자로부터 입력 받기
      const input = await Console.readLineAsync(
        '덧셈할 문자열을 입력해 주세요.\n'
      );

      // 입력값으로 합계 계산
      const result = this.calculateSum(input);

      // 결과 출력
      Console.print(`결과 : ${result}`);
    } catch (error) {
      // 에러 발생 시 에러 메시지 출력
      Console.print(error.message);
      throw error;
    }
  }

  calculateSum(input) {
    return 0;
  }
}

export default App;
