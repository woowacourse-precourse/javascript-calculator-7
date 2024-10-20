import { MainController } from './controller/MainController.js';

class App {
  async run() {
    const controller = new MainController();

    await controller.getUserInput();
    controller.separateInput();
    controller.extractValues();
    controller.validateValues();
    controller.getTotalSum();
    controller.showResult();
  }
}

export default App;
