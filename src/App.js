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
      } else {
        numArr = this.splitByDelimiter(input);
      }

      const result = this.getSum(numArr);
      Console.print(`결과 : ${result}`);
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

  getSum(numArr) {
    let sum = 0;
    for (let i = 0; i < numArr.length; i++) {
      sum += numArr[i];
    }
    return sum;
  }
}

export default App;
