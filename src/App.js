// 문자열 덧셈 계산기

import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    MissionUtils.Console.print('덧셈할 문자열을 입력해 주세요.');

    try {
      const input = await MissionUtils.Console.readLineAsync();
      const result = this.calculate(input);
      MissionUtils.Console.print(`결과 : ${result}`);
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }

  calculate(input) {
    if (input.trim() === '') return 0;

    const { delimiter, numbers } = this.parseInput(input);
    const parsedNumbers = numbers.split(delimiter).map((num) => {
      const parsed = Number(num);
      if (isNaN(parsed)) {
        throw new Error('[ERROR] 숫자가 아닌 값이 포함되어 있습니다.');
      }
      return parsed;
    });

    this.validateNumbers(parsedNumbers);
    return parsedNumbers.reduce((sum, num) => sum + num, 0);
  }

  parseInput(input) {
    const customDelimiterMatch = input.match(/^\/\/(.)\n(.*)/);
    if (customDelimiterMatch) {
      const [, delimiter, numbers] = customDelimiterMatch;
      return { delimiter, numbers };
    }
    return { delimiter: /[,|:]/, numbers: input };
  }

  validateNumbers(numbers) {
    const negatives = numbers.filter((num) => num < 0);
    if (negatives.length > 0) {
      throw new Error('[ERROR] 음수는 허용되지 않습니다.');
    }
  }
}

export default App;
