import { Console } from '@woowacourse/mission-utils';

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
      '덧셈할 문자열을 입력해 주세요.\n'
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
    Console.print(`결과 : ${input.reduce((acc, cur) => acc + cur, 0)}`);
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
}

export default App;
