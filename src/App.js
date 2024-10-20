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

    // 에러 케이스
    this.isValidInput(numString, separators);

    let numArr = [numString];
    separators.forEach((separator) => {
      numArr = numArr.flatMap((str) => str.split(separator));
    });

    return this.calSum(numArr);
  }

  isValidInput(input, separators) {
    // 에러 케이스 1. 첫 문자가 구분자인 경우
    if (separators.includes(input[0])) {
      throw new Error('[ERROR] The first character cannot be a separator.');
    }

    // 에러 케이스 2. 마지막 구분자 이후에 숫자가 없는 경우
    if (separators.includes(input[input.length - 1])) {
      throw new Error('[ERROR] A number must follow the last separator.');
    }

    // 에러 케이스 3. 공백 문자열이 포함된 경우
    separators.forEach((separator) => {
      if (input.includes(`${separator} `) || input.includes(` ${separator}`)) {
        throw new Error('[ERROR] Whitespace around a separator is not allowed.');
      }
    });

    // 에러 케이스 4. 연속된 구분자가 포함된 경우
    separators.forEach((separator) => {
      if (input.includes(`${separator}${separator}`)) {
        throw new Error('[ERROR] Consecutive separators are not allowed.');
      }
    });
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
