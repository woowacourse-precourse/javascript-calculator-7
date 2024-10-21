import AdditionCalculator from "./AdditionCalculator.js";

class App {
  async run() {
    const additionCalculator = new AdditionCalculator();

    await additionCalculator.start();
  }
}

export default App;
