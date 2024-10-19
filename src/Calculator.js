class Calculator {
  sum(numbers) {
    let sum = 0;
    for (const num of numbers) {
      sum += Number(num);
    }
    return sum;
  }
}

export default Calculator;
