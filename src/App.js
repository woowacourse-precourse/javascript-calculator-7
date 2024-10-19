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
      throw error;
    }
  }

  throwError(message) {
    switch (message) {
      case '음수':
        Console.print(`[ERROR] : 구분자와 양수로 구성된 문자열이어야 합니다.`);
    }
    throw new Error('[ERROR]');
  }

  splitByDelimiter(input) {
    const numArr = input.split(/,|:/).map(Number);
    for (let i = 0; i < numArr.length; i++) {
      if (numArr[i] < 0) {
        this.throwError('음수');
      }
    }
    return numArr;
  }

  splitByCustom(input) {
    const custom = input.match(/\/\/(.+)\\n/);
    const regex = new RegExp(custom[1]);
    const newInput = input.match(/(?<=\\n).+/g);
    const numArr = newInput[0].split(regex).map(Number);
    for (let i = 0; i < numArr.length; i++) {
      if (numArr[i] < 0) {
        this.throwError('음수');
      }
    }
    return numArr;
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
