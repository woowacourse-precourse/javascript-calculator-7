class App {
  #separators;
  #inputNumbers;

  constructor() {
    this.#separators = [];
    this.#inputNumbers = null;
  }

  async run() {}

  calculate(numberArray) {
    const result = numberArray.reduce((currentSum, targetNumber) => {
      return currentSum + targetNumber;
    }, 0);

    return result;
  }

  findSeparator(inputString) {
    const firstElement = inputString[0];
    const elementNumber = Number(firstElement);
    if (!Number.isNaN(elementNumber)) {
      this.#inputNumbers = inputString;
      return [',', ':'];
    }

    const removedFormatString = inputString.split('//').join('').split('\n');
    const separator = removedFormatString[0];
    this.#inputNumbers = removedFormatString[1];
    return [separator];
  }
}

export default App;
