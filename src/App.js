import AddCalculator from "./AddCalculator.js";

class App {
  async run() {
      const Calculator = new AddCalculator();
      await Calculator.run();  
  };
};

export default App;