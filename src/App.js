import InputView from './view/InputView.js';
import Validation from './domain/Validation.js';
import Separation from './domain/Separation.js';
import Calculator from './domain/Calculator.js';
import OutputView from './view/OutputView.js';

class App {
  async run() {
    const string = await InputView.readString();

    new Validation(string);

    const numbers = new Separation(string).getNumbers();
    const total = new Calculator(numbers).add();

    OutputView.printTotal(total);
  }
}

export default App;
