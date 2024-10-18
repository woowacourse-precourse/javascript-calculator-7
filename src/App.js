import { Console } from '@woowacourse/mission-utils';

import { PRINT_MESSAGES } from './constants.js';

const customSeparationSymbolRegex = /\/\/(.*?)\\n/;
const customSeparationSymbolsRegex = /\/\/(.*?)\\n/g;

class App {
  constructor() {
    this.separationSymbols = [',', ':'];
  }

  async run() {
    const input = await this.getInputForAddition();
    const inputWithoutSpace = this.removeSpace(input);

    if (this.isCustomSeparationSymbolExist(inputWithoutSpace)) {
      const customSeparationSymbols =
        this.extractCustomSeparationSymbols(inputWithoutSpace);
      this.separationSymbols.push(...customSeparationSymbols);
    }

    const inputWithoutCustomSeparationSymbols =
      this.removeCustomSeparationSymbols(inputWithoutSpace);

    const separatedInput = this.separateInput(
      inputWithoutCustomSeparationSymbols
    );

    this.validateWrongNumber(separatedInput);

    this.printResult(separatedInput);
  }

  async getInputForAddition() {
    const input = await Console.readLineAsync(
      PRINT_MESSAGES.ENTER_ADDITION_STRING
    );

    return input;
  }

  removeSpace(input) {
    return input.replace(/\s/g, '');
  }

  isCustomSeparationSymbolExist(input) {
    return customSeparationSymbolRegex.test(input);
  }

  extractCustomSeparationSymbols(input) {
    const customSeparationSymbols = Array.from(
      input.matchAll(customSeparationSymbolsRegex),
      (m) => m[1]
    );

    this.validateWrongCustomSeparationSymbols(customSeparationSymbols);

    return customSeparationSymbols;
  }

  removeCustomSeparationSymbols(input) {
    return input.replace(customSeparationSymbolsRegex, '');
  }

  separateInput(input) {
    const separationRegex = new RegExp(`[${this.separationSymbols.join('')}]`);
    return input.split(separationRegex).map((char) => Number(char));
  }

  printResult(input) {
    Console.print(
      `${PRINT_MESSAGES.FINAL_RESULT}${input.reduce(
        (acc, cur) => acc + cur,
        0
      )}`
    );
  }

  validateWrongNumber(additionArray) {
    additionArray.forEach((num) => {
      if (isNaN(num)) {
        throw new Error('[ERROR] 숫자가 입력되지 않았습니다.');
      }

      if (num <= 0) {
        throw new Error('[ERROR] 양수의 숫자만 입력해 주세요.');
      }
    });
  }

  validateWrongCustomSeparationSymbols(customSymbols) {
    const symbolRegex = /[!@#$%^&*().?";{}|<>]/;

    customSymbols.forEach((symbol) => {
      if (symbol.length !== 1) {
        throw new Error('[ERROR] 커스텀 구분자는 한 글자씩 입력해 주세요.');
      }

      if (this.separationSymbols.includes(symbol)) {
        throw new Error(
          '[ERROR] 커스텀 구분자는 기본 구분자와 겹치지 않아야 합니다.'
        );
      }

      if (!symbolRegex.test(symbol)) {
        throw new Error(
          '[ERROR] 커스텀 구분자는 기본 구분자를 제외한 특수문자만 포함할 수 있습니다.'
        );
      }
    });
  }
}

export default App;
