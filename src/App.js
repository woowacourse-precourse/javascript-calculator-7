import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      let input = await Console.readLineAsync(
        '덧셈할 문자열을 입력해 주세요.\n'
      );
      input = input.trim();

      let numArr = [];
      if (input.length === 0) {
        this.throwError('빈 문자열');
      } else if (input.startsWith('//')) {
        numArr = this.splitByCustom(input);
      } else {
        numArr = this.splitByDelimiter(input);
      }

      let regex = /[^1-9]/;
      const flag = numArr.some((element) => regex.test(element));
      if (flag) {
        this.throwError('타입 에러');
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
        Console.print(`[ERROR] : 음수가 포함되었습니다.`);
        break;
      case '빈 문자열':
        Console.print(`[ERROR] : 빈 문자열입니다.`);
        break;
      case '타입 에러':
        Console.print(
          `[ERROR] : 양수가 아닌 문자가 포함되어 있거나 구분자가 잘못 사용되었습니다.`
        );
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
    const custom = input.match(/\/\/(.*)\\n/);
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
