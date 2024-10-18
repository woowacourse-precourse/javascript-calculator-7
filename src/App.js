import Calculator from "./calculator.js";

class App {
  async run() {
    const myCalculator = new Calculator();
    await myCalculator.run();
  }
}

export default App;
