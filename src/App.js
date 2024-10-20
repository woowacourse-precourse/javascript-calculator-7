import getInput from './get-input.js';
import isInputValid from './is-input-valid.js';
import printOutput from './print-output.js';
import Calculator from './Calculator.js';

class App {
  async run() {
    const input = await getInput();
    isInputValid(input);
    const calculator = new Calculator();
    const result = calculator.calculate(input);
    printOutput(result);
  }
}

export default App;
