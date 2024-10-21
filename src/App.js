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
    // 빈 문자열이나 null 입력 처리
    if (!input) return 0;

    let numbers;
    let delimiter = ',|:'; // 기본 구분자

    // 커스텀 구분자 확인
    if (input.startsWith('//')) {
      const splitInput = input.split('\\n');
      delimiter = splitInput[0].substring(2); // '//' 다음의 문자를 구분자로 사용

      // 커스텀 구분자가 없는 경우 예외 처리
      if (delimiter.trim() === '') {
        throw new Error('[ERROR] 커스텀 구분자가 없습니다.');
      }
      input = splitInput.slice(1).join(''); // 실제 숫자 문자열
    }

    // 문자열을 구분자로 분리하고 각 요소를 숫자로 변환
    numbers = input.split(new RegExp(delimiter)).map(Number);

    // 숫자 배열의 합계 계산
    const sum = numbers.reduce((total, current) => {
      // 숫자가 아닌 값 예외 처리
      if (isNaN(current)) {
        throw new Error('[ERROR] 숫자가 아닌 값이 포함되어 있습니다.');
      }
      // 음수 예외 처리
      if (current < 0) {
        throw new Error('[ERROR] 음수가 포함되어 있습니다.');
      }
      return total + current;
    }, 0);

    return sum;
  }
}

export default App;
