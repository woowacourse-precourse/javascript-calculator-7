import Calculator from "./Calculator.js";

class App {
  async run() {
    try {
      const cal = new Calculator();

      await cal.run();
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default App;
