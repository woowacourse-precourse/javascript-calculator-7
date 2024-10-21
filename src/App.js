import Controller from "./controller/controller.js";

class App {
  #Controller = new Controller();

  async run() {
    try {
      await this.#Controller.start();
    } catch (e) {
      throw new Error("[ERROR]");
    }
  }
}

export default App;
