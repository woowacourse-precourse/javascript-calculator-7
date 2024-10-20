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
  isValidSeperator(string) {
    const regex = new RegExp(`[${CALCULATOR.seperator.join('')}]`);
    const parts = string.split(regex);
    if (!parts.every(part => part.trim() === '' || /^\d+$/.test(part))) {
      throw new Error(ERROR.prefix + ERROR.invalidChar);
    }
  }
}

class StringProcessor {
  extractSeperator(input) {
    const customSeparatorPattern = new RegExp(
      `^${CALCULATOR.customFormPrefix}(.+?)${CALCULATOR.customFormSuffix}`
    );
    const match = input.match(customSeparatorPattern);
    return match ? match[1].trim() : null;
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

    if (input.startsWith('//')) {
      // 사용자가 커스텀 구분자를 등록하려 시도하는 경우
      const customSeperator = this.processor.extractSeperator(input);
    }

    this.validation.isValidSeperator(input);
  }
}

export default App;
