// Calculator 클래스는 숫자 배열을 받아 합계를 계산하는 기능을 담당함
class Calculator {
  calculate(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}

export default Calculator;
