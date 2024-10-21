import input from './input.js';

class App {
  async run() {
    const userInput = await input();
  }
}

export default App;
