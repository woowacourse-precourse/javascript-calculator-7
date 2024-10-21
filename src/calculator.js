// Calculator 클래스는 숫자 배열을 받아 합계를 계산하는 기능을 담당
class Calculator {
  /**
   * 숫자 배열을 받아 합계를 계산
   * @param {number[]} numbers - 합계를 계산할 숫자 배열
   * @returns {number|null} 계산된 합계 또는 에러 발생 시 null
   * @throws {Error} 숫자가 정수 범위를 초과하거나 합계가 범위를 초과할 때 에러
   */
  calculate(numbers) {
    try {
      let sum = 0;

      for (const num of numbers) {
        if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
          Console.print("[ERROR] 숫자가 정수의 범위를 초과");
          throw new Error();
        }

        sum += num;
      }

      if (sum > Number.MAX_SAFE_INTEGER || sum < Number.MIN_SAFE_INTEGER) {
        Console.print("[ERROR] 합계가 정수의 범위를 초과");
        throw new Error();
      }

      return sum;
    } catch (error) {
      throw error;
    }
  }
}

export default Calculator;
