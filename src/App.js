import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const input = await Console.readLineAsync('덧셈할 문자열을 입력해주세요.\n');

      const StringNumbers = input.split(/[,|:]/);

      const sum = StringNumbers.reduce((acc, number) => {
        return acc + Number(number);
      }, 0);

      Console.print(sum);
    } catch {}
  }
}

export default App;
