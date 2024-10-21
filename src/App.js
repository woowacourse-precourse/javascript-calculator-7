import { run as calculateRun } from "./calculate.js";

class App {
  async run() {
    await calculateRun();
  }
}

export default App;
