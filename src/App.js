import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const input = await Console.readLineAsync(
        '덧셈할 문자열을 입력해 주세요.\n'
      );

      let numArr = [];
      numArr = this.splitByDelimiter(input);
      Console.print(numArr);
    } catch (error) {
      Console.print('에러:', error);
    }
  }

  splitByDelimiter(input) {
    return input.split(/,|:/).map(Number);
  }
}

export default App;
