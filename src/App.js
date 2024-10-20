import Input from "./Input.js";
import Calculator from "./Calculator.js";
import Output from "./Output.js";

class App {
  constructor() {
    this.calculator = new Calculator();
    this.output = new Output();
  }

  async run() {
    const { customSeparator, numbers } = await Input.getCustomSeparatorAndNumbers();
    this.calculator.init(customSeparator, numbers);
    Output.printResult(this.calculator.sum());
  }
}

export default App;
