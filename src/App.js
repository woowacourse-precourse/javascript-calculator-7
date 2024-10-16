import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    let input = await MissionUtils.Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.'
    );

    const baseDivision = ':|,';
    const customPattern = /^\/\/(.+)\\n/;
    const customDivision =
      input.match(customPattern) && input.match(customPattern)[1];

    let division = '';
    if (customDivision) {
      division = new RegExp(customDivision + '|:|,');
      input = input.substring(4 + customDivision.length);
    } else {
      division = new RegExp(baseDivision);
    }

    const numArr = input.split(division).map(Number);

    MissionUtils.Console.print(numArr);
  }
}

export default App;
