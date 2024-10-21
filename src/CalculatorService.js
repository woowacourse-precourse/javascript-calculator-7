class CalculatorService {
  static calculate(numbers) {
    return numbers.reduce(this.#sum, 0);
  }

  static #sum(a, b) {
    return a + b;
  }
}

export default CalculatorService;
