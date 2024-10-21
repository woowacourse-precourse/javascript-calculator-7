import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const input = await Console.readLineAsync(
        '덧셈할 문자열을 입력해 주세요.\n'
      );
      const result = this.calculateSum(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  calculateSum(input) {
    // 빈 입력 처리
    if (!input) return 0;

    // 기본 구분자 설정
    let delimiter = ',|:';

    // 문자열을 구분자로 분리하고 숫자로 변환
    const numbers = input.split(new RegExp(delimiter)).map(Number);

    // 합계 계산 및 반환
    return numbers.reduce((total, current) => total + current, 0);
  }
}

export default App;
