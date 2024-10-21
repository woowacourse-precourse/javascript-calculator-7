class Calculator {
  constructor(pipeline) {
    this.pipeline = pipeline;
  }

  async calculate(expression) {
    //Pipeline 기본으로 실행
    return await this.pipeline.execute({ expression: expression, delimiter: "", result: 0 });
  }
}

export default Calculator;
