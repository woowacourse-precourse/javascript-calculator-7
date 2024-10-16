import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    const input = await MissionUtils.Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.'
    );

    const baseDivision = ':|,';
    const customPattern = /^\/\/(.+)\\n/;
    const customDivision =
      input.match(customPattern) && input.match(customPattern)[1];

    MissionUtils.Console.print('결과 : ' + input);
  }
}

export default App;
