class App {
  #separators;
  #input;

  constructor() {
    this.#separators = [];
    this.#input = null;
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
      return [',', ':'];
    }

    const removedFormatString = inputString.split('//').join('').split('\n');
    const separator = removedFormatString[0];
    return [separator];
  }
}

export default App;
