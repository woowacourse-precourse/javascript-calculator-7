import { ERROR_MESSAGE } from './constants.js';

class Calculation {
  // 입력에서 커스텀 구분자를 처리하는 함수
  static extractCustomDelimiter(input) {
    const customIndex = input.indexOf('\\n');
    const customDelimiter = input.substring(2, customIndex);
    const numbersString = input.slice(customIndex + 2); // 구분자 이후의 숫자 부분
    return { customDelimiter, numbersString };
  }

  // 입력에서 숫자를 추출하는 함수
  static extractNumbers(input, delimiterPattern = /[,:]/) {
    return input.split(delimiterPattern).map(Number);
  }

  // 음수가 있는지 확인하는 함수
  static checkForNegativeNumbers(numbers) {
    const hasNegative = numbers.some((num) => num < 0);
    if (hasNegative) {
      throw new Error(ERROR_MESSAGE.NEGATIVE_NUMBER);
    }
  }

  // 숫자의 합계를 계산하는 함수
  static calculateSum(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }

  // 메인 함수 - 각 작업을 분리하여 수행
  static parseInput(input) {
    let numbers;

    // 커스텀 구분자 확인
    if (input.startsWith('//')) {
      const { customDelimiter, numbersString } =
        this.extractCustomDelimiter(input);
      numbers = this.extractNumbers(
        numbersString,
        new RegExp(`[${customDelimiter}]`)
      );
    } else {
      numbers = this.extractNumbers(input);
    }

    // 음수 확인
    this.checkForNegativeNumbers(numbers);

    // 합계 계산
    return this.calculateSum(numbers);
  }
}

export default Calculation;
