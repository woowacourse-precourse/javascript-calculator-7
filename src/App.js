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
        const [delimiterPart, numberPart] = input.split('\\n');
        let numbers = numberPart;
        const customDelimiter = delimiterPart.slice(2);
        const delimiters = [',', ':', customDelimiter];

        for (const delimiter of delimiters) {
          numbers = numbers.split(delimiter).join('');
        }

        nums = numbers.split('');
      }

      console.log(nums);
    } catch (error) {}
  }
}

export default App;
