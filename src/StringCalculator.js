/**
 * 문자열 배열을 받아서 숫자로 변환 후 더한 값을 반환하는 클래스
 */
class StringCalculator {
  /**
   *
   * @param {Number[]} numbers 구분자로 나뉜 문자열 배열
   * @returns 문자열 배열을 숫자로 변환 후 더한 값
   */
  calculate(numbers) {
    return numbers.reduce((acc, num) => acc + parseInt(num), 0);
  }
}

export default StringCalculator;
