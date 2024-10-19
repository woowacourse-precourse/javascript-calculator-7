import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      const result = this.calculateSum(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print('[ERROR]');
    }
  }

  calculateSum(input) {
    if (!input) return 0;
    const numbers = input.split(/[,|:]/).map(Number);
    return numbers.reduce((sum, number) => sum + number, 0);
  }
}

export default App;
