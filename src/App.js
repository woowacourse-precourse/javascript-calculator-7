import { Console } from '@woowacourse/mission-utils';

class App {
  #input;

  #separators;

  #inputNumbers;

  constructor() {
    this.#input = null;
    this.#separators = [',', ':'];
    this.#inputNumbers = null;
  }

  async run() {
    const numberArray = (await this.askNumbers())
      .findSeparator()
      .extractNumbers();
    const convertedNumbers = numberArray.map(Number);
    const sum = App.calculate(convertedNumbers);

    Console.print(`결과 : ${sum}`);
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
    if (!this.isCustomSeparator(inputString)) {
      this.#inputNumbers = inputString;
    } else {
      const SEPARATOR_FORMAT = ['//', '\\n'];
      const [prefix, suffix] = SEPARATOR_FORMAT;
      const [separatorString, numberString] = inputString.split(suffix);
      const separator = separatorString.slice(prefix.length);

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
    this.validate(inputString);
    this.#input = inputString;
    return this;
  }

  isCustomSeparator(input) {
    const [firstSeparator, secondSeparator] = this.#separators;
    const numberArray = input
      .split(firstSeparator)
      .join(secondSeparator)
      .split(secondSeparator);
    const numbers = Number(numberArray.join(''));
    return Number.isNaN(numbers);
  }

  validate(input) {
    if (this.isCustomSeparator(input)) {
      const [prefixString, numbers] = input.split('\\n');
      const separator = prefixString.slice(2);

      App.isValidCustomFormat(prefixString, numbers);
      App.isValidSeparator(separator);
      App.isValidNumbers([separator], numbers);
    } else {
      App.isValidNumbers(this.#separators, input);
    }
  }

  static isValidCustomFormat(prefixString) {
    const prefix = prefixString.slice(0, 2);
    if (prefix !== '//') {
      throw new Error(
        '[ERROR] 커스텀 구분자를 선택하신 경우, 구분자를 "//"와 "\\n" 사이에 입력해주세요.',
      );
    }
  }

  static isValidNumbers(separators, numbers) {
    let numberString = numbers;
    separators.forEach((separator, index) => {
      const nextSeparator = separators[index + 1] ?? '';
      numberString = numberString.split(separator).join(nextSeparator);
    });

    const targetNumber = Number(numberString);
    if (Number.isNaN(targetNumber) || targetNumber < 0) {
      throw new Error(
        '[ERROR] 0 이상의 양수만 계산 가능합니다. 각 수는 커스텀 구분자 또는 기본 구분자(쉼표(,), 콜론(:))로 구분해주세요.',
      );
    }
  }

  static isValidSeparator(separator) {
    if (separator.length !== 1) {
      throw new Error(
        '[ERROR] 문자 또는 기호/특수문자 1자로 커스텀 구분자를 입력해주세요.',
      );
    }
  }
}

export default App;
