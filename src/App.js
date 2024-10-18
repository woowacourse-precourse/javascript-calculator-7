import displayInputGuide from './inputHandler.js';

class App {
  constructor() {
    this.inputHandler = { displayInputGuide };
  }

  async run() {
    this.inputHandler.displayInputGuide();
  }
}

export default App;
