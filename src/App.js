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
    let seperator = [',', ':'];
    let numString = input;

    //커스텀 구분자 구현
    if (input.startsWith('//')) {
      const customSeperatorEnd = input.indexOf('\\n');
      if (customSeperatorEnd === -1) {
        throw new Error('[ERROR] Invalid input: Incorrect separator format');
      }
      const customSeperator = input.slice(2, customSeperatorEnd);
      seperator.push(customSeperator);
      numString = input.slice(customSeperatorEnd + 2);
    }
    const numArr = numString.split(new RegExp(`[${seperator.join('')}]`));

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
      throw new Error('[ERROR] Invalid input: Non-numeric value detected'); //숫자가 아닐시 예외처리
    }
    if (value < 0) {
      throw new Error('[ERROR] Negative numbers not allowed'); //음수일시 예외처리
    }
  }
}

export default App;
