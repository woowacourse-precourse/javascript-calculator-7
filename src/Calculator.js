import OutputHandler from './OutputHandler.js';

const DEFAULT_SEPARATOR = [',', ':'];

class Calculator {
  constructor() {
    this.outputHandler = new OutputHandler();
  }
  calculate(inputString) {
    const isCustomerSeparator = this.determineSeparator(inputString);
    let numbers;

    if (isCustomerSeparator) {
      const separator = this.getCustomSeparator(inputString);
      const customSeparators = [separator, ...DEFAULT_SEPARATOR];
      const newString = inputString.substring(5); //커스텀 구분자를 표시하는 부분 제거

      numbers = this.getNumbers(newString, customSeparators);
      return this.doAddition(numbers);
    } else {
      numbers = this.getNumbers(inputString, DEFAULT_SEPARATOR);
      return this.doAddition(numbers);
    }
  }

  determineSeparator(inputString = '') {
    if (inputString.startsWith('//') && inputString.indexOf('\\n') > 2) {
      return true;
    } else if (DEFAULT_SEPARATOR.some(separator => inputString.includes(separator))) {
      return false
    } else {
      throw new Error("구분자가 없습니다.");
    }
  }

  getCustomSeparator(inputString = '') {
    const newIndex = inputString.indexOf('\\n');
    const customSeparator = inputString.substring(2, newIndex);

    this.validateCustomSeparator(customSeparator);

    return customSeparator;
  }

  validateCustomSeparator(separator) {
    if (separator.length !== 1) {
      throw new Error("커스텀 구분자는 하나의 문자여야 합니다.");
    }
  }

  getNumbers(inputString = '', separators = []) {
    let splitResults = [inputString];

    separators.forEach(separator => {
      splitResults = splitResults.flatMap(part => part.split(separator));
    });

    // 빈 문자열 제거
    splitResults = splitResults.filter(item => item.trim() !== '');
    this.validateNumbers(splitResults);

    return splitResults
  }

  validateNumbers(splitResults) {
    // 숫자가 없는 경우
    if (splitResults.length === 0) {
      throw new Error("숫자가 포함되어야 합니다.");
    }

    // 소숫점 숫자를 포함하는지 검증하고 예외 처리
    splitResults.forEach(item => {
      const number = Number(item);

      // 숫자로 변환할 수 없는 값이 있으면 예외 처리
      if (isNaN(number)) {
        throw new Error("잘못된 문자가 포함되었습니다.");
      }

      // 음수 숫자 예외 처리
      if (number < 0) {
        throw new Error("[ERROR] 음수는 허용되지 않습니다.");
      }

      // 소숫점 숫자 예외 처리
      if (item.includes('.')) {
        throw new Error("소숫점 숫자는 허용되지 않습니다.");
      }
    });
  }

  doAddition(numbers) {
    return numbers
      .map(number => Number(number))
      .reduce((acc, cur) => acc + cur, 0);
  }
}

export default Calculator;