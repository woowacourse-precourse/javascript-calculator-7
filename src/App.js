import pipelineLoader from "./loader/index.js";
import Calculator from "./template/Calculator.js";
import { View } from './view/index.js';

class App {
  async init() {
    this.pipeline = await pipelineLoader();
    this.calculator = new Calculator(this.pipeline);
  }

  async run() {
    await this.init();

    const command = await View.input()
    const { result } = await this.calculator.calculate(command);
    View.printResult(result)
  }
}

export default App;
