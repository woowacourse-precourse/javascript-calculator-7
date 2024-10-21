import Controller from "./controller/Controller.js";

class App {
  async run() {
    await new Controller().start();
  }
}

export default App;
