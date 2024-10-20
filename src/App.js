import StringSplitter from './Model/StringSplitter.js';
import View from './View/View.js';

class App {
  #view = new View();

  async run() {
    const input = await this.#view.readInputString();

    const stringSplitter = new StringSplitter(input);
    const splittedNumbers = stringSplitter.split().toNumbers();

    const sum = this.#calculateSum(splittedNumbers);

    this.#view.printOutputString(sum);
  }

  #calculateSum(numbers) {
    return numbers.reduce((acc, cur) => (acc += cur), 0);
  }
}

export default App;
