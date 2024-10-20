import { ERROR_MESSAGES } from '../constant/message.js';

// 계산기 데이터 및 비즈니스 로직 처리
class Calculater {
  #numbers;

  constructor() {
    this.#numbers = [];
  }

  getSumNumbers() {
    return this.#numbers.reduce((acc, curr) => acc + curr, 0);
  }

  validateString(input) {
    if (!input) {
      throw new Error(ERROR_MESSAGES.empty);
    }

    // 커스텀 구분자를 사용하는 경우
    if (input.startsWith('//')) {
      const customDelimiter = this.extractCustomDelimiter(input);

      const stringPart = input.split('\\n')[1];
      this.validateNumbers(stringPart, new RegExp(`[${customDelimiter}]`));
    }

    // 기본 구분자를 사용하는 경우
    else {
      if (isNaN(Number(input[0]))) {
        throw new Error(ERROR_MESSAGES.defaultStart);
      }

      this.validateNumbers(input, /[,|:]/);
    }
  }

  extractCustomDelimiter(data) {
    const inputMatch = data.match(/^\/\/(.+)\\n/);

    if (!inputMatch) {
      throw new Error(ERROR_MESSAGES.customForamt);
    }

    const customDelimiter = inputMatch[1];

    if (customDelimiter.length > 1) {
      throw new Error(ERROR_MESSAGES.length);
    }

    if (customDelimiter === '.') {
      throw new Error(ERROR_MESSAGES.period);
    }

    return customDelimiter;
  }

  validateNumbers(string, delimiter) {
    const stringNumbers = string.split(delimiter);

    this.#numbers = stringNumbers.map((stringNumber) => {
      if (!stringNumber) {
        throw new Error(ERROR_MESSAGES.missingNumber);
      }

      const number = Number(stringNumber);

      if (isNaN(number)) {
        throw new Error(ERROR_MESSAGES.invalidDelimiter);
      }

      if (number <= 0) {
        throw new Error(ERROR_MESSAGES.negativeNumber);
      }

      return number;
    });
  }
}

export default Calculater;
