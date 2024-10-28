import Controller from './controller/controller.js';

class App {
  constructor() {
    this.controller = new Controller();
  }

  async run() {
    await this.controller.execute();
  }
}

export default App;
