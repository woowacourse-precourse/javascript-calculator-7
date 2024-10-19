import View from './View/View.js';

class App {
  #view = new View();

  async run() {
    const input = await this.#view.readInputString();
    this.#view.printOutputString(input);
  }
}

export default App;
