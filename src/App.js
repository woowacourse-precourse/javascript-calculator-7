import StringAdditionModel from "./models/StringAdditionModel.js";
import StringAdditionView from "./views/StringAdditionView.js";
import StringAdditionController from "./controllers/StringAdditionController.js";

class App {
  constructor() {
    const model = new StringAdditionModel();
    const view = new StringAdditionView();
    this.controller = new StringAdditionController(model, view);
  }

  async run() {
    await this.controller.run();
  }
}

export default App;
