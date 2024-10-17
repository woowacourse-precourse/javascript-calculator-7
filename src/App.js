import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
      const result = this.calculateSum(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }

  calculateSum(input) {
    if (!input.trim()) {     // 입력값이 공백이거나 빈 문자열일때
      return 0;
    }

    let delimiter = /[,:]/;
    let numbersString = input;

    // 커스텀 구분자 
    if (input.startsWith('//')) {
      const [customDelimiterPart, numberPart] = input.split('\\n');
      const customDelimiter = customDelimiterPart.slice(2);

      // 커스텀 구분자가 특수문자 처리
      delimiter = new RegExp(`[${customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}]`);
      numbersString = numberPart;
    }

    // 소수점과 정수 숫자를 추출 정규식
    const numberPattern = /-?\d+(\.\d+)?/g;

    // 숫자만 추출
    const numbers = numbersString.match(numberPattern)?.map(Number) || [];

    // 숫자가 하나도 없는 경우
    if (numbers.length === 0) {
      throw new Error("잘못된 값을 입력하였습니다.");
    }

    // 음수나 NaN 처리
    if (numbers.some(n => isNaN(n) || n < 0)) {
      throw new Error("잘못된 값을 입력하였습니다.");
    }

    // 연속된 구분자가 있을 경우
    for (let i = 0; i < input.length - 1; i++) {
      if (delimiter.test(input[i]) && delimiter.test(input[i + 1])) {
        throw new Error("잘못된 값을 입력하였습니다.");
      }
    }

    // 가장 긴 소수점 자릿수 찾기
    const maxDecimalPlaces = Math.max(...numbers.map(num => {
        const decimalPart = num.toString().split('.')[1]; // 소수점 이하 부분
        return decimalPart ? decimalPart.length : 0;      // 소수점 이하 자릿수 계산
      })
    );

    // 가장 긴 소수점 자릿수를 기준으로 배율 결정 (부동소수점 문제 해결)
    const SCALING_FACTOR = Math.pow(10, maxDecimalPlaces); 
    const sum = numbers.reduce((acc, num) => acc + Math.round(num * SCALING_FACTOR), 0) / SCALING_FACTOR;

    return sum;
  }
}

export default App;
