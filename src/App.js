import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    Console.print('덧셈할 문자열을 입력해 주세요.');
    try {
      const input = await this.readLineAsync('');
      const result = this.calculate(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    } finally {
      Console.close();
    }
  }

  readLineAsync(question) {
    return new Promise((resolve) => {
      Console.readLineAsync(question, (input) => {
        resolve(input);
      });
    });
  }
   
  // 변환한 숫자의 합을 반환한다.
  calculate(input) {
    // 빈 문자열을 입력받는다면 0을 반환한다.
    if (input === '') {
      return 0;
    }

    const numbers = this.parseInput(input);
    return this.sumNumbers(numbers);
  }
  // 문자열을 입력받아 숫자로 변환한다.
  parseInput(input) {
    const delimiters = [',', ':'];
    const tokens = input.split(new RegExp(`[${delimiters.join('')}]`));

    const numbers = tokens.map((token) => {
      const number = Number(token);
      if (isNaN(number)) {
        throw new Error('유효한 숫자가 아닙니다.');
      }
      if (number < 0) {
        throw new Error('음수는 입력할 수 없습니다.');
      }
      return number;
    });

    return numbers;
  }

  sumNumbers(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
}

export default App;
