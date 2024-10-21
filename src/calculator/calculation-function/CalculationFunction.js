class CalculationFunction {
  #result = 0;

  calculateString() {
    throw new Error('calculateString()은 반드시 구현되어야 합니다.');
  }

  getResult() {
    return this.#result;
  }

  addToResult(value) {
    this.#result += value;
  }
}

export default CalculationFunction;
