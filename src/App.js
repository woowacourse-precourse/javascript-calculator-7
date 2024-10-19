import View from './View/View.js';

class App {
  #view = new View();

  async run() {
    const input = await this.#view.readInputString();

    const DELIMITERS = /[,|:]/;
    const splittedInput = input.split(DELIMITERS);

    splittedInput.forEach((split) => this.#view.printOutputString(split));
  }
}

export default App;
