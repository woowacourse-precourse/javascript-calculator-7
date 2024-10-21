import { Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.SEPARATORS = [',', ':'];
  }

  async run() {
    try {

      const INPUT = await App.getInput();

      const CUSTOM_SEPARATOR = App.getCustomSeparator(INPUT);

      if (CUSTOM_SEPARATOR) {
        this.SEPARATORS.push(CUSTOM_SEPARATOR);
      }
      
    } catch(error) {
      console.print(error.message);
    }
  }

  static async getInput() {
    const INPUT = await Console.readLineAsync(
      '덧셈할 문자열을 입력해주세요.\n'
    );

    if (!INPUT) {
      throw new Error('[ERROR] 입력 값이 없습니다.');
    }

    return INPUT;
  }

  static getCustomSeparator(INPUT) {
    if (INPUT.startsWith('//')) {
      if (INPUT.includes('\n')) {
        const CUSTOM_SEPARATOR = INPUT[2];
        return CUSTOM_SEPARATOR;
      }
      throw new Error('[ERROR] 커스텀 구분자가 잘못되었습니다.');
    }

    return false;
  }
}

export default App;
