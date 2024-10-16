import Calculator from "./Calculator.js";

class App {
  async run() {
    const cal = new Calculator();
    await cal.main();
  }
}

export default App;
