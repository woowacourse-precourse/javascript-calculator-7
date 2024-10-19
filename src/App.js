import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.separator = ',|:';
    this.initValue = '';
  }

  async getUserinput() {
    const userinput = MissionUtils.Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n'
    );
    return userinput;
  }

  getCustomSeparator(userinput) {
    const isCustomSeparator =
      userinput.slice(0, 2) === '//' && userinput.slice(3, 5) === '\\n';
    if (isCustomSeparator) {
      return userinput[2];
    }
    return '';
  }

  updateSeparator(customSeparator) {
    if (customSeparator) {
      this.separator = `${this.separator}|${customSeparator}`;
    }
  }

  updateInputValue(userinput, customSeparator) {
    if (customSeparator) {
      this.initValue = userinput.slice(5);
    }
    if (!customSeparator) {
      this.initValue = userinput;
    }
  }

  async run() {
    const userinput = await this.getUserinput();
    const customSeparator = this.getCustomSeparator(userinput);
    this.updateSeparator(customSeparator);
    this.updateInputValue(userinput, customSeparator);
  }
}

export default App;
