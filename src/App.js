import getCustomSplitter from './getCustomSplitter.js';
import input from './input.js';

class App {
  async run() {
    const userInput = await input();
    const [splitter, string] = getCustomSplitter(userInput);
  }
}

export default App;
