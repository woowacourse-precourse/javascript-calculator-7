//숫자 덧셈 로직

class NumberCalculator {
  static sum(numbers) {
    return numbers.reduce((acc, curr) => acc + Number(curr), 0);
  }
}

export default NumberCalculator;
