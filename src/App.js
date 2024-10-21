import Validator from "./Validator.js";
import { INITIAL_SEPARATOR_LIST } from "./constants.js";
import OutputView from "./OutputView.js";
import InputView from "./InputView.js";

class App {
  #input;
  #separatorList = [...INITIAL_SEPARATOR_LIST];
  #inputNumberList = [];

  async run() {
    await this.#readInput();
    this.#validate();
    this.#getInputNumberList();
    this.#printResult();
  }

  async #readInput() {
    this.#input = await InputView.readInput();
  }

  #validate() {
    new Validator(this.#input, this.#separatorList).parse();
  }

  #getInputNumberList() {
    this.#inputNumberList = this.#input.match(/[0-9]+/g).map(Number);
  }

  #getTotalSum() {
    return this.#inputNumberList.reduce((acc, current) => acc + current);
  }

  #printResult() {
    OutputView.printMessage(this.#getTotalSum());
  }
}

export default App;
