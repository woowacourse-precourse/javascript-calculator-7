import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    Console.print('덧셈할 문자열을 입력해 주세요.');
    const input = await Console.readLineAsync(); 
    try {
      const result = this.calculateSum(input);
      Console.print(`결과 : ${result}`); 
    } catch (error) {
      Console.print(error.message); 
    }
  }

  calculateSum(input) {
    if (!input) return 0;

    const customDelimiterMatch = input.match(/^\/\/(.)\n/);
    let delimiters = [',', ':'];
    let numbersString = input;

    if (customDelimiterMatch) {
      delimiters.push(customDelimiterMatch[1]);
      numbersString = input.slice(customDelimiterMatch[0].length);
    }

    const regex = new RegExp(`[${delimiters.join('')}]`);
    const numbers = numbersString.split(regex).map(Number);

    if (numbers.some(isNaN)) {
      throw new Error('[ERROR] 잘못된 입력입니다.');
    }

    // 음수에 대한 예외 처리 추가
    if (numbers.some(number => number < 0)) {
      throw new Error('[ERROR] 음수는 허용되지 않습니다.');
    }

    return numbers.reduce((sum, number) => sum + number, 0);
  }
}

export default App;
