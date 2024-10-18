import { Controller } from './Controller.js';

class App {
  async run() {
    const controller = new Controller();
    controller.getUserInput().then(() => {
      controller.separateInput();
      controller.extractValues();
      controller.validateValues();
      controller.getTotalSum();
      controller.showResult();
    });
  }
}

export default App;
