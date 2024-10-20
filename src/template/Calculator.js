class Calculator {
  constructor(pipeline) {
    this.pipeline = pipeline;
  }

  async calculate(expression) {
    return await this.pipeline.execute({ expression: expression, delimiter: "", result: 0 });
  }
}

export default Calculator;
