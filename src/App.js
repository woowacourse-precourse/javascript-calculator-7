import Calculate from "./Calculate.js";

class App {
  async run() {
    const calculate = new Calculate();
    await calculate.startCalculate();
  }
}

export default App;
