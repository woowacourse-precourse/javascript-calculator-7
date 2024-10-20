import { Calculator } from "./model/Calculator.js";

class App {
  async run() {
    const calculator = new Calculator();
    await calculator.run();
  }
}

export default App;
