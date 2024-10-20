import Controller from './controller/Controller.js';

class App {
  constructor() {
    this.controller = new Controller();
  }

  async run() {
    await this.controller.process();
  }
}

export default App;
