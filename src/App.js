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

      const NUMBERS = App.getNumbers(INPUT, this.SEPARATORS);

      const RESULT = App.calculate(NUMBERS);

      Console.print(`결과 : ${RESULT}`);
    } catch(error) {
      Console.print(error.message);
      throw error;
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
      const CUSTOM_SEPARATOR = INPUT[2];
      return CUSTOM_SEPARATOR;
    }

    return false;
  }

  static getNumbers(INPUT, SEPARATORS) {
    const NUMBERS_PART = SEPARATORS.length > 2 ? INPUT.slice(5) : INPUT;

    const REGEX = new RegExp(`[${SEPARATORS.join('')}]`);

    const NUMBERS = NUMBERS_PART.split(REGEX);

    if (NUMBERS.some((number) => number === '')) {
      throw new Error('[ERROR] 구분자 사이에 숫자가 없습니다.');
    }

    if (NUMBERS.some((number) => Number.isNaN(Number(number)))) {
      throw new Error('[ERROR] 숫자가 아닌 값이 포함되어 있습니다.');
    }

    if (NUMBERS.some((number) => Number(number) < 0)) {
      throw new Error('[ERROR] 음수를 입력할 수 없습니다.');
    }

    return NUMBERS;
  }

  static calculate(NUMBERS) {
    return NUMBERS.reduce((acc, cur) => acc + Number(cur), 0);
  }
}

export default App;
