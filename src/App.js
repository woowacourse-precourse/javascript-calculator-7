import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const input = await Console.readLineAsync(
        '덧셈할 문자열을 입력해 주세요.\n',
      );

      let nums = [];
      if (input.length === 0) {
        nums.push(0);
      } else {
        const delimiters = [',', ':'];
        let numbers = input;

        if (input.startsWith('//')) {
          const [delimiterPart, ...rest] = input.split('\\n');
          const customDelimiter = delimiterPart.slice(2);
          if (!isNaN(customDelimiter)) {
            throw new Error('[ERROR] 구분자는 숫자가 될 수 없습니다.');
          }
          if (delimiters.indexOf(customDelimiter) === -1) {
            delimiters.push(customDelimiter);
          }

          numbers = rest.join('');
        }

        for (const delimiter of delimiters) {
          numbers = numbers.split(delimiter).join(',');
        }

        nums = numbers.split(',').map((number) => parseInt(number, 0));
      }

      if (nums.some((num) => isNaN(num))) {
        throw new Error('[ERROR] 잘못된 입력입니다.');
      } else if (nums.some((num) => num < 0)) {
        throw new Error('[ERROR] 음수는 허용되지 않습니다.');
      } else if (nums.some((num) => num === 0)) {
        throw new Error('[ERROR] 0는 허용되지 않습니다.');
      }

      const sum = nums.reduce((acc, cur) => (acc += cur), 0);
      Console.print(`결과 : ${sum}`);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
