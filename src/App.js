import StringInputProcessor from './classes/StringInputProcessor.js';
import StringInputReader from './classes/StringInputReader.js';
import StringCalculator from './classes/StringCalculator.js';

class App {
  async run() {
    const inputReader = new StringInputReader();
    const inputString = await inputReader.getInput();
    const processedInput = StringInputProcessor.processInput(inputString);
    StringCalculator.validateNumbersArray(processedInput);
    const result = StringCalculator.sum(processedInput);
  }
}

export default App;
