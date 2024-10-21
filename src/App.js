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

    // 커스텀 구분자 확인
    if (input.startsWith('//')) {
      const splitInput = input.split('\\n');
      delimiter = splitInput[0].substring(2); // '//' 다음의 문자를 구분자로 사용
      input = splitInput.slice(1).join(''); // 실제 숫자 문자열
    }

    // 문자열을 구분자로 분리하고 숫자로 변환
    const numbers = input.split(new RegExp(delimiter)).map(Number);

    // 합계 계산 및 반환
    return numbers.reduce((total, current) => total + current, 0);
  }
}

export default App;
