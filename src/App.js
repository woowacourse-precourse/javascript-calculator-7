import input from "./view/input.js";

class App {
  async run() {
    const inputString = await input.getStringToPlus();
  }
}

export default App;
