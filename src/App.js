import Model from './Model.js';
import ViewIn from './ViewIn.js';
import ViewOut from './ViewOut.js';
import Controller from './Controller.js';

class App {
  async run() {
    const model = new Model();
    const viewIn = new ViewIn();
    const viewOut = new ViewOut();
    const controller = new Controller();

    await controller.control(model, viewIn, viewOut);
  }
}

export default App;
