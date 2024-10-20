// 문자열 덧셈 계산기

import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    MissionUtils.Console.print('덧셈할 문자열을 입력해 주세요.');

    const input = await MissionUtils.Console.readLineAsync();
    const result = this.calculate(input);
    MissionUtils.Console.print(`결과 : ${result}`);
  }

  calculate(input) {
    if (input.trim() === '') return 0;

    const { delimiter, numbers } = this.parseInput(input);
    const parsedNumbers = numbers.split(delimiter).map(Number);

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
}

export default App;
