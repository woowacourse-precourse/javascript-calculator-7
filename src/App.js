import Controller from './controller/controller.js';

class App {
  async run() {
    const controllerApp = new Controller();

    await controllerApp.run();
  }
}

export default App;
