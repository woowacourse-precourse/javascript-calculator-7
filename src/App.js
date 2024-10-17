import StringInputProcessor from './classes/StringInputProcessor.js';
import StringInputReader from './classes/StringInputReader.js';

class App {
  async run() {
    const inputReader = new StringInputReader();
    const inputString = await inputReader.getInput();
    const processedInput = StringInputProcessor.processInput(inputString);
  }
}

export default App;
