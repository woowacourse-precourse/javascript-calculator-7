import StringSplitter from './Model/StringSplitter.js';
import View from './View/View.js';

class App {
  #view = new View();

  async run() {
    const input = await this.#view.readInputString();

    const stringSplitter = new StringSplitter(input);
    const splittedInput = stringSplitter.split();

    const numbers = splittedInput.map(Number);

    const sum = this.calculateSum(numbers);

    this.#view.printOutputString(sum);
  }

  calculateSum(numbers) {
    return numbers.reduce((acc, cur) => (acc += cur), 0);
  }
}

export default App;
