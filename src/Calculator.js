class Calculator {
  sum(arr) {
    let sum = 0;
    arr.forEach((num) => (sum += num));
    return sum;
  }
}

export default Calculator;
