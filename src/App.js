import Controller from "./controller/controller.js";

class App {
  #Controller = new Controller();
  async run() {
    this.#Controller.start();
  }
}

export default App;
