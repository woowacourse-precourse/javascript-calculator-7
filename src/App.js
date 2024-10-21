import input from "./view/input.js";

class App {
  async run() {
    await input.getStringToPlus();
  }
}

export default App;
