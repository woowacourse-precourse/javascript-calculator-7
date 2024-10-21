import { Console } from '@woowacourse/mission-utils';

class App {
  parse_string = (input) => {
    let numbers;
    let delimiter = [',', ':'];

    if (input.startsWith('//')) {
      const parts = input.split('\\n');
      if (parts.length < 2) {
        throw new Error(
          '[ERROR] 커스텀 구분자 지정 후 올바른 입력이 없습니다.'
        );
      }
      const new_delimiter = parts[0].slice(2);
      delimiter.push(new_delimiter);
      input = parts[1];
    }

    const delimiter_regex = new RegExp(
      delimiter.map((d) => `\\${d}`).join('|')
    );
    numbers = input.split(delimiter_regex).map((num) => {
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
      if (user_line === '') return 0;

      const numbers = this.parse_string(user_line);
      Console.print(`결과: ${numbers.reduce((sum, num) => sum + num, 0)}`);
    } catch (error) {
      Console.print(error);
    }
  }
}

export default App;
