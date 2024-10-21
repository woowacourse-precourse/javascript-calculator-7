class CalculatorService {
  constructor() {}

  static calculate(calcuateDTO) {
    const numbers = calcuateDTO.values;
    return numbers.reduce(this.#sum, 0);
  }

  static #sum(a, b) {
    return a + b;
  }
}

export default CalculatorService;