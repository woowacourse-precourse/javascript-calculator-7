import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    MissionUtils.Console.print('덧셈할 문자열을 입력해 주세요.');

    const input = await MissionUtils.Console.readLineAsync();
    const result = this.calculate(input);
    MissionUtils.Console.print(`결과 : ${result}`);
  }

  calculate(input) {
    if (input === '') return 0;

    const numbers = input.split(/[,|:]/).map(Number);
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}

export default App;
