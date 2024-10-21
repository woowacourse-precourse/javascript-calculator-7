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

  parseInput(input) {
    // 커스텀 구분자가 있는지 확인
    if (input.startsWith('//')) {
      const delimiterEndIndex = input.indexOf('\\n'); // \\n을 구분자로 찾음
      if (delimiterEndIndex === -1) {
        throw new Error('[ERROR] 잘못된 입력입니다.'); // \\n을 찾지 못한 경우
      }
      const delimiter = input.substring(2, delimiterEndIndex); // 구분자 추출
      const numbersString = input.substring(delimiterEndIndex + 2); // 구분자 이후의 숫자 문자열 추출
      return { delimiter, numbersString };
    }
    // 기본 구분자 (쉼표 또는 콜론)
    return { delimiter: ',|:', numbersString: input };
  }

}

export default StringCalculator;