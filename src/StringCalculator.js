import { ERROR_MESSAGE } from "./constant.js";

/**
 * 문자열 배열을 받아서 숫자로 변환 후 더한 값을 반환하는 클래스
 */
class StringCalculator {
  /**
   * 문자열 배열을 받아서 숫자로 변환 후 더한 값을 반환
   * @param {Number[]} numbers 구분자로 나뉜 문자열 배열
   * @returns {string} 구분자로 나뉜 문자열을 숫자로 변환 후 더한 값
   * @thorws 숫자가 아닌 문자열이 포함되어 있을 경우 에러 발생
   */
  calculate(numbers) {
    return numbers
      .reduce((acc, num) => {
        if (num === "") {
          return acc;
        } else if (!isNaN(num)) {
          return acc + Number(num);
        }

        throw new Error(ERROR_MESSAGE.INVALID_INPUT);
      }, 0)
      .toString();
  }
}

export default StringCalculator;