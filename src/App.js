import StringInputProcessor from './classes/StringInputProcessor.js';
import StringInputReader from './classes/StringInputReader.js';
import StringCalculator from './classes/StringCalculator.js';
import StringOutputWriter from './classes/StringOutputWriter.js';

class App {
  async run() {
    const inputReader = new StringInputReader();
    const processor = new StringInputProcessor();

    const inputString = await inputReader.getInput();
    const processedInput = processor.processInput(inputString);

    StringCalculator.validateNumbersArray(processedInput);
    const result = StringCalculator.sum(processedInput);

    StringOutputWriter.printResult(result);
  }
}

export default App;
