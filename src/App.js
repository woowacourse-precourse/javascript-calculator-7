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
    const [separator, numberString] = removedFormatString;
    this.#inputNumbers = numberString;
    return [...separator];
  }

  extractNumbers() {
    const separators = this.#separators;
    const numberString = this.#inputNumbers;
    if (separators.length === 1) {
      const separator = separators.pop();
      return numberString.split(separator);
    }

    const [firstSeparator, secondSeparator] = separators;
    const firstSeparated = numberString
      .split(firstSeparator)
      .join(secondSeparator);

    const numbers = firstSeparated.split(secondSeparator);
    return numbers;
  }
}

export default App;
