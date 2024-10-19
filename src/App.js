import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const input = await Console.readLineAsync(
        '덧셈할 문자열을 입력해 주세요.\n'
      );

      let numArr = [];
      if (input.startsWith('//')) {
        numArr = this.splitByCustom(input);
        Console.print(numArr);
      } else {
        numArr = this.splitByDelimiter(input);
        Console.print(numArr);
      }
    } catch (error) {
      Console.print('에러:', error);
    }
  }

  splitByDelimiter(input) {
    return input.split(/,|:/).map(Number);
  }

  splitByCustom(input) {
    const custom = input.match(/\/\/(.+)\\n/);
    const regex = new RegExp(custom[1]);
    const newInput = input.match(/(?<=\\n).+/g);
    return newInput[0].split(regex).map(Number);
  }
}

export default App;
