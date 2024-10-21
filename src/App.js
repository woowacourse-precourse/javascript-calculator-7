import Calculator from "./domain/Calulator.js";
import input from "./view/input.js";

class App {
  async run() {
    const inputString = await input.getStringToPlus();
    const calculator = new Calculator(inputString);
    const result = calculator.calculate();
  }
}

export default App;
