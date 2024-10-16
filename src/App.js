import { Console } from '@woowacourse/mission-utils';

const customSeparationSymbolRegex = /\/\/(.*?)\\n/g;

class App {
  constructor() {
    this.separationSymbols = [',', ':'];
  }

  async run() {
    const input = await this.getInputForAddition();
    const inputWithoutSpace = this.removeSpace(input);
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
}

export default App;
