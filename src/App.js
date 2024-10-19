import Controller from "./controllers/Controller.js";

class App {
  async run() {
    const CONTROLLER = new Controller();
    await CONTROLLER.run();
  }
}

export default App;
