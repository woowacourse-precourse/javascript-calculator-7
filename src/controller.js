class CalculatorController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async handleCalculate() {
    try {
      const input = await this.view.inputView();
      const RESULT = this.model.calculate(input);
      this.view.outputView(RESULT);
    } catch (error) {
      this.view.errorView(error);
      throw error;
    }
  }
}

export default CalculatorController;
