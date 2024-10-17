class CalculatorController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async handleCalculate() {
    try {
      const RESULT = this.model.calculate(rl);
      this.view.outputView(RESULT);
    } catch (error) {
      this.view.errorView(error);
    } finally {
      this.view.close();
    }
  }
}
