import Input from "./Input.js";
import Calculator from "./Calculator.js";
import Output from "./Output.js";

class App {
  input;

  constructor() {
    this.input = new Input();
  }

  async run() {
    const { customSeparator, numbers } = await this.input.getCustomSeparatorAndNumbers();

    const calculator = new Calculator(customSeparator, numbers);
    const result = calculator.sum();

    const output = new Output(result);
    output.printResult();
  }
}

export default App;
