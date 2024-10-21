class CalculatorController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async processCalculation() {
    try {
      const input = await this.view.inputView();
      const result = await this.model.calculate(input);
      this.view.outputView(result);
    } catch (error) {
      this.view.errorView(error);
      throw error;
    }
  }
}

export default CalculatorController;
