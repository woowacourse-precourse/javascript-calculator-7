// Calculator 클래스는 숫자 배열을 받아 합계를 계산하는 기능을 담당
class Calculator {
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
