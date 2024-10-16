import StringInputReader from './classes/StringInputReader.js';

class App {
  async run() {
    const inputReader = new StringInputReader();
    const inputString = await inputReader.getInput();
  }
}

export default App;
