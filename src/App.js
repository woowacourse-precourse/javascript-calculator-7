import Input from "./Input.js";
import Calculator from "./Calculator.js";
import Output from "./Output.js";

class App {
  async run() {
    const { customSeparator, numbers } = await Input.getCustomSeparatorAndNumbers();

    const calculator = new Calculator(customSeparator, numbers);
    const result = calculator.sum();

    const output = new Output(result);
    output.printResult();
  }
}

export default App;
