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
      return 0; // 빈 문자열 처리
    }

    let separators = [',', ':'];
    let numString = input;

    // 커스텀 구분자 구현
    if (input.startsWith('//')) {
      const customSeparatorEnd = input.indexOf('\\n');
      if (customSeparatorEnd === -1) {
        throw new Error('[ERROR] Invalid input: Incorrect separator format');
      }
      const customSeparator = input.slice(2, customSeparatorEnd);
      separators = [customSeparator];
      numString = input.slice(customSeparatorEnd + 2);
    }

    let numArr = [numString];
    separators.forEach((separator) => {
      numArr = numArr.flatMap((str) => str.split(separator));
    });
    Console.print(separators);
    Console.print(numArr);
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
