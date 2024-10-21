import { Console } from '@woowacourse/mission-utils';

class App {
  parse_string = (input) => {
    let numbers;
    let delimiter = /[,:]/;

    numbers = input.split(delimiter).map((num) => {
      const parsed = parseInt(num.trim(), 10);
      if (isNaN(parsed)) {
        throw new Error(`[ERROR] 유효하지 않은 입력값: ${num}`);
      }
      return parsed;
    });

    return numbers;
  };
  async run() {
    try {
      const user_line = await Console.readLineAsync(
        '덧셈할 문자열을 입력해주세요.\n'
      );
      const numbers = this.parse_string(user_line);
      Console.print(`결과: ${numbers}`);
    } catch (error) {
      Console.print(error);
    }
  }
}

export default App;
