import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const input = await Console.readLineAsync(
        '덧셈할 문자열을 입력해 주세요.\n',
      );

      console.log('input', input);

      let nums = [];
      if (input.length === 0) {
        nums.push(0);
      } else {
        const delimiters = [',', ':'];
        let numbers = input;

        if (input.startsWith('//')) {
          const [delimiterPart, ...rest] = input.split('\\n');
          const customDelimiter = delimiterPart.slice(2);
          if (delimiters.indexOf(customDelimiter) === -1) {
            delimiters.push(customDelimiter);
          }

          numbers = rest;
        }

        for (const delimiter of delimiters) {
          numbers = numbers.split(delimiter).join(',');
        }

        nums = numbers.split(',');
      }

      console.log(nums);
    } catch (error) {}
  }
}

export default App;
