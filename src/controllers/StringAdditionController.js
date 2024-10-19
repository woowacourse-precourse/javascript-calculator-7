class StringAdditionController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async run() {
    try {
      const input = await this.view.getInput();
      const result = this.model.calculate(input);
      this.view.printResult(result);
    } catch (error) {
      this.view.throwError(error);
    }
  }
}

export default StringAdditionController;
