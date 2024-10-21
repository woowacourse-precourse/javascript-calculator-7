import { Console } from '@woowacourse/mission-utils';

class StringCalculator {
  async run() {
    try {
      const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      const result = this.calculate(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(error.message);
      throw error; // 예외를 다시 던져서 테스트에서 확인할 수 있도록 함
    }
  }

  calculate(input) {
    if (!input) return 0; // 빈 문자열은 0을 반환
  
    const { delimiter, numbersString } = this.parseInput(input); // 구분자와 숫자 문자열을 추출
    const numbers = this.splitNumbers(numbersString, delimiter); // 구분자로 숫자 분리
    this.validateNumbers(numbers); // 숫자 유효성 검사
    return this.sumNumbers(numbers); // 숫자 합산
  }
}

export default StringCalculator;