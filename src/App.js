import { Console } from '@woowacourse/mission-utils';
class App {
  async run() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    try {
      const result = this.add(input);
      Console.print(`결과 : ${result}`);
    } catch (err) {
      Console.print(err.message);
    }
  }

  add(input) {
    if (!input) {
      return 0; //빈 문자열 처리
    }
    const seperator = [',', ':'];
    const numArr = input.split(new RegExp(`[${seperator.join('')}]`));

    return this.calSum(numArr);
  }

  calSum(numbers) {
    return numbers.reduce((sum, num) => {
      const value = Number(num);
      this.isValidNum(value); //입력값 예외처리
      return sum + value;
    }, 0);
  }

  isValidNum(value) {
    if (isNaN(value)) {
      //숫자가 아닐시 예외처리
    }
    if (value < 0) {
      //음수일시 예외처리
    }
  }
}

export default App;
