// Calculator 클래스는 숫자 배열을 받아 합계를 계산하는 기능을 담당
class Calculator {
  /**
   * 숫자 배열을 받아 합계를 계산
   * @param {number[]} numbers - 합계를 계산할 숫자 배열
   * @returns {number} 계산된 합계
   * @throws {Error} 숫자가 정수 범위를 초과하거나 합계가 범위를 초과할 때 에러
   */
  calculate(numbers) {
    let sum = 0;

    for (const num of numbers) {
      if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
        throw new Error("[ERROR] 숫자가 정수의 범위를 초과");
      }

      sum += num;
    }

    if (sum > Number.MAX_SAFE_INTEGER || sum < Number.MIN_SAFE_INTEGER) {
      throw new Error("[ERROR] 합계가 정수의 범위를 초과");
    }

    return sum;
  }
}

export default Calculator;
