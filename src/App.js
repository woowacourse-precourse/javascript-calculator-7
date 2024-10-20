import Controller from './Controller.js';

class App {
  async run() {
    const controller = new Controller();
    await controller.process();
  }
}

export default App;
