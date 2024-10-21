import { Console } from '@woowacourse/mission-utils';

const REGEX_NORMAL = /^[0-9,:]+$/;
const REGEX_CUSTOM = /^\/\/.\\n/;

class App {
  constructor() {
    this.str = '';
    this.separator = '';
  }

  handleInput(input) {
    if (input.match(REGEX_NORMAL)) {
      this.str = input;
      this.separator = /,|:/;
      return true;
    }
    if (input.match(REGEX_CUSTOM)) {
      const separator = input[2];
      const str = input.split('\\n')[1];
      const regex = new RegExp(`^[0-9${separator}]+$`);

      if (str.match(regex)) {
        this.str = str;
        this.separator = separator;
        return true;
      }
    }
    return false;
  }

  extractNumber() {
    return this.str.split(this.separator).map(Number);
  }

  async run() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요\n');
    if (!this.handleInput(input)) throw new Error('[ERROR] 올바른 형식을 입력해주세요.');
    const arr = this.extractNumber();
  }
}

export default App;
