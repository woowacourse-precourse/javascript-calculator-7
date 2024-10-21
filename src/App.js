import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const PROMPT_MESSAGE = '덧셈할 문자열을 입력해 주세요: ';
    const userInput = await Console.readLineAsync(PROMPT_MESSAGE);
    const result = this.calculateSum(userInput);

    Console.print(result);
  }

  // 입력 받은 문자열 안의 숫자 합계 계산
  // (input: string, output: number)
  calculateSum(input) {
    if (input === '') {
      return 0;
    }

    const numbers = this.extractNumbers(input);
    return numbers.reduce((sum, num) => sum + num, 0);
  }

  // 기본 구분자 쉼표(,)와 콜론(:)를 기준으로 입력받은 문자열 분리 후 숫자로 변환
  // (input: string, output: number[])
  extractNumbers(input) {
    return input
      .split(/[,:]/)
      .map(Number)
      .filter((num) => !isNaN(num));
  }
}

export default App;
