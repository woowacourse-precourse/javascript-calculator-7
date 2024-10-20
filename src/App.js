import getInput from './functions/get-input.js';
import Calculator from './Calculator.js';
import isInputValid from './functions/is-input-valid.js';
import printOutput from './functions/print-output.js';

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
