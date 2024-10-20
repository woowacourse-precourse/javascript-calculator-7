import CALCULATOR_MESSAGE from '../src/constants/CalculatorMessage.js';
import CALCULATOR from './constants/Calculator.js';
import ERROR from './constants/Error.js';
import { Console } from '@woowacourse/mission-utils';

class Io {
  async getString() {
    return await Console.readLineAsync(CALCULATOR_MESSAGE.start);
  }
  printResult(value) {
    return Console.print(CALCULATOR_MESSAGE.result + value);
  }
}

class Validation {
  //주어진 문자열을 구분자를 기준으로 나눌 수 있는지 확인한다.
  hasInvalidSeperator(string) {
    const regex = new RegExp(`[${CALCULATOR.seperator.join('')}]`);
    const parts = string.split(regex);
    if (!parts.every(part => part.trim() === '' || /^\d+$/.test(part))) {
      throw new Error(ERROR.prefix + ERROR.invalidChar);
    }
  }
  // 커스텀 구분자 등록형식이 맞는지 확인한다.
  static isValidCustomSeperatorForm(matchResult) {
    if (matchResult === null) {
      throw new Error(ERROR.prefix + ERROR.invalidCustomForm);
    }
  }
  // 커스텀 구분자가 유효한지 확인한다.
  isValidSeperator(seperator) {
    if (!isNaN(seperator)) {
      // 숫자는 커스텀 구분자가 될 수 없다.
      throw new Error(ERROR.prefix + ERROR.invalidCustomSeperator);
    }
  }
}

class StringProcessor {
  constructor() {
    this.customSeparatorPattern = new RegExp(
      `^${CALCULATOR.customFormPrefix}(.+?)${CALCULATOR.customFormSuffix}`
    );
  }
  extractSeperator(input) {
    const match = input.match(this.customSeparatorPattern);

    Validation.isValidCustomSeperatorForm(match);

    return match[1].trim();
  }
  getStringToCalculate(input) {
    return input.replace(this.customSeparatorPattern, '');
  }

  extractNumber(string) {
    const regex = new RegExp(`[${CALCULATOR.seperator.join('')}]`);
    const numberPart = string.split(regex);
    return numberPart
      .map(part => part.trim())
      .filter(part => /^\d+$/.test(part))
      .map(Number);
  }
}

class App {
  constructor() {
    this.ioHandler = new Io();
    this.validation = new Validation();
    this.processor = new StringProcessor();
  }
  async run() {
    let input = await this.ioHandler.getString();
    let stringToCalculate = '';
    if (input.startsWith('//')) {
      // 사용자가 커스텀 구분자를 등록하려 시도하는 경우
      const customSeperator = this.processor.extractSeperator(input);

      // 사용자가 등록한 커스텀 구분자의 유효성을 검증한다.
      this.validation.isValidSeperator(customSeperator);

      // 커스텀 구분자를 구분자 리스트에 추가한다.
      CALCULATOR.seperator.push(customSeperator);

      // 계산할 문자열만 자른다.
      stringToCalculate = this.processor.getStringToCalculate(input);
    } else {
      stringToCalculate = input;
    }

    this.validation.hasInvalidSeperator(stringToCalculate);

    let numberArray = this.processor.extractNumber(stringToCalculate);
  }
}

export default App;
