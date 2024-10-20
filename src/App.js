import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      const result = this.calculateSum(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  calculateSum(input) {
    if (!input) return 0;

    const { numbers } = this.parseInput(input);

    return numbers.map((value) => {
      const number = Number(value.trim());
      if (isNaN(number) || number < 0) {  // 잘못된 입력(음수) 처리
        throw new Error('[ERROR] 입력이 잘못되었습니다.');
      }
      return number;
    }).reduce((sum, number) => sum + number, 0);
  }

  parseInput(input) {
    let delimiter = /[,:]/; // 기본 구분자
    let numbersPart = input;

    // 커스텀 구분자 처리
    if (input.startsWith('//')) {
      const customDelimiter = input[2]; // 구분자가 될 3번째 문자 추출
      const escapedDelimiter = customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // 특수 문자 이스케이프(하지 않으면 오류 발생)
      delimiter = new RegExp(`[${escapedDelimiter}]`);
      numbersPart = input.slice(5); // 계산될 숫자 부분 추출
    }

    const numbers = numbersPart.split(delimiter);
    return { numbers };
  }
}

export default App;
