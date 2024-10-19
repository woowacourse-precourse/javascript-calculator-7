import Controller from "./controllers/Controller";

class App {
  async run() {
    const CONTROLLER = new Controller();
    await CONTROLLER.run();
  }
}

export default App;
