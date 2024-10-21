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

  calculateSum(str) {
    // 빈 문자열 입력시 0을 반환
    if (!str) return 0;

    let numbers;
    // 기본 구분자
    let customSeprator = ',|:';

    // 커스텀 구분자
    if (str.startsWith('//')) {
      // '\n'으로 나누기
      const splitedStr = str.split('\\n');

      // //와 \n 사이 구분자가 없을 경우 예외 처리(에러코드: 3)
      if (splitedStr.length < 2 || splitedStr[0].length <= 2) {
        throw new Error('[ERROR] 커스텀 구분자가 올바르지 않습니다.');
      }

      // '//' 다음의 문자를 구분자로 사용
      customSeprator = splitedStr[0].substring(2);
      // 실제 숫자 문자열
      str = splitedStr.slice(1).join('');
    }

    // 문자열을 구분자로 분리하고 각 요소를 숫자로 변환
    numbers = str.split(new RegExp(customSeprator)).map(Number);

    // 숫자 배열의 합계 계산
    const sum = numbers.reduce((acc, curr) => {
      // 음수를 전달할 경우 예외 처리(에러코드: 1)
      if (curr < 0) {
        throw new Error('[ERROR] 음수가 포함되어 있습니다.');
      }
      // 숫자가 아닌 값을 전달할 경우 예외 처리(에러코드: 2)
      if (isNaN(curr)) {
        throw new Error('[ERROR] 숫자가 아닌 값이 포함되어 있습니다.');
      }
      return acc + curr;
    }, 0);
    return sum;
  }
}

export default App;
