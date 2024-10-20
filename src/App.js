import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      let input = (
        await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n')
      ).trim();

      let numArr = [];
      if (input.length === 0) {
        Console.print(`결과 : 0`);
        return;
      }
      if (input.startsWith('//')) {
        numArr = this.splitByCustom(input);
      } else {
        numArr = this.splitByDelimiter(input);
      }
      this.checkError(numArr);
      Console.print(`결과 : ${this.getSum(numArr)}`);
    } catch (error) {
      throw error;
    }
  }

  splitByDelimiter(input) {
    return input.split(/,|:/).map(Number);
  }

  splitByCustom(input) {
    const custom = input.match(/\/\/(.*)\\n/);
    const regexp = new RegExp(custom[1]);
    const newInput = input.match(/(?<=\\n).*/g);
    return newInput[0].split(regexp).map(Number);
  }

  getSum(numArr) {
    let sum = 0;
    for (let i = 0; i < numArr.length; i++) {
      sum += numArr[i];
    }
    return sum;
  }

  checkError(numArr) {
    let regexp = /[^1-9]/;
    const flag = numArr.some((element) => regexp.test(element));
    if (flag) {
      Console.print(
        `[ERROR] : 양수가 아닌 문자가 포함되어 있거나 구분자가 잘못 사용되었습니다.`
      );
      throw new Error('[ERROR]');
    }
  }
}

export default App;
