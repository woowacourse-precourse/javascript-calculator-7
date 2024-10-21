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
    const numbers = str.split(/[,:]/).map(Number);
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);

    return sum;
  }
}

export default App;
