import StringSplitter from './Model/StringSplitter.js';
import View from './View/View.js';

class App {
  #view = new View();
  #stringSplitter = new StringSplitter();

  async run() {
    const input = await this.#view.readInputString();

    const splittedInput = this.#stringSplitter.split(input);

    splittedInput.forEach((split) => this.#view.printOutputString(split));
  }
}

export default App;
