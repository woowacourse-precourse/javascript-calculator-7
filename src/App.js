import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      const result = this.calculateSum(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(error.message);
    }
  }

  calculateSum(input) {
    if (!input) return 0;

    const numbers = input.split(/[,|:]/).map((value) => {
      const number = Number(value);
      if (isNaN(number)) {
        throw new Error('[ERROR] 입력이 잘못되었습니다.');
      }
      return number;
    });

    return numbers.reduce((sum, number) => sum + number, 0);
  }
}

export default App;
