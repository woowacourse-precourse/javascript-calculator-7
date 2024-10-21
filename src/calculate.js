import { ERROR_MESSAGE } from './constants.js';

class Calculation {
  static parseInput(input) {
    let numbers;

    // 커스텀 구분자가 있는지 확인
    if (input.startsWith('//')) {
      // 커스텀 구분자 추출
      const customIndex = input.indexOf('\\n');
      const customDelimiter = input.substring(2, customIndex);

      // 실제 숫자 문자열 추출 (커스텀 구분자 이후의 문자열)
      numbers = input
        .slice(customIndex + 2)
        .split(customDelimiter)
        .map(Number);
    } else {
      numbers = input.split(/[,:]/).map((value) => Number(value));
      // 음수 여부 확인
      const hasNegative = numbers.some((num) => num < 0);

      if (hasNegative) {
        throw new Error(ERROR_MESSAGE.NEGATIVE_NUMBER); // 음수가 있으면 에러 발생
      }
    }

    // 숫자들의 합계를 계산
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);

    return sum;
  }
}

export default Calculation;
