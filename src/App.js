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
    try {
      const numberArray = (await this.askNumbers())
        .findSeparator()
        .extractNumbers();
      const convertedNumbers = numberArray.map(Number);
      const sum = App.calculate(convertedNumbers);

      Console.print(`결과 : ${sum}`);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
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
    App.validate(inputString);
    this.#input = inputString;
    return this;
  }

  static isCustomSeparator(input) {
    const numberArray = input.split(',').join(':').split(':');
    const numbers = Number(numberArray.join(''));
    return Number.isNaN(numbers);
  }

  static validate(input) {
    if (App.isCustomSeparator(input)) {
      const [prefixString, numbers] = input.split('\\n');
      const separator = prefixString.slice(2);
      App.isValidCustomFormat(prefixString, numbers);
      App.isValidSeparator(separator);
      App.isValidNumbers([separator], numbers);
    } else {
      App.isValidNumbers([',', ':'], input);
    }
  }

  static isValidCustomFormat(prefixString) {
    const prefix = prefixString.slice(0, 2);
    if (prefix !== '//') {
      throw new Error(
        '커스텀 구분자를 선택하신 경우, 구분자를 "//"와 "\\n" 사이에 입력해주세요.',
      );
    }
  }

  static isValidNumbers(separators, numbers) {
    let numberString = numbers;
    separators.forEach((separator, index) => {
      const nextSeparator = separators[index + 1] ?? '';
      numberString = numberString.split(separator).join(nextSeparator);
    });

    if (Number.isNaN(Number(numberString))) {
      throw new Error(
        '0 이상의 양수만 계산 가능합니다. 각 수는 커스텀 구분자 또는 기본 구분자(쉼표(,), 콜론(:))로 구분해주세요.',
      );
    }
  }

  static isValidSeparator(separator) {
    if (separator.length !== 1) {
      throw new Error(
        '문자 또는 기호/특수문자 1자로 커스텀 구분자를 입력해주세요.',
      );
    }
  }
}

export default App;
