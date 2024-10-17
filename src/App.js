import { Console } from '@woowacourse/mission-utils';

class App {
  #input;

  #separators;

  #inputNumbers;

  constructor() {
    this.#input = null;
    this.#separators = [];
    this.#inputNumbers = null;
  }

  async run() {
    const numberArray = (await this.askNumbers())
      .findSeparator()
      .extractNumbers();
    const convertedNumbers = numberArray.map(Number);
    const sum = App.calculate(convertedNumbers);
    Console.print(sum);
  }

  static calculate(numberArray) {
    const result = numberArray.reduce(
      (currentSum, targetNumber) => currentSum + targetNumber,
      0,
    );

    return result;
  }

  findSeparator() {
    const inputString = this.#input;
    const firstElement = inputString[0];
    const elementNumber = Number(firstElement);
    if (!Number.isNaN(elementNumber)) {
      this.#inputNumbers = inputString;
      this.#separators = [',', ':'];
    } else {
      const removedFormatString = inputString
        .split('\\n')
        .join('//')
        .split('//');
      const [, separator, numberString] = removedFormatString;
      this.#inputNumbers = numberString;
      this.#separators = [separator];
    }

    return this;
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

  async askNumbers() {
    const inputString =
      await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');
    this.#input = inputString;
    return this;
  }
}

export default App;
