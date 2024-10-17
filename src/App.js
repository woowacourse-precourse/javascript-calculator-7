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
      division = new RegExp(`${customDivision}|${baseDivision}`);
      input = input.substring(4 + customDivision.length);
    } else {
      division = new RegExp(baseDivision);
    }

    const divisionArr = input.split(division);
    let sum = 0;

    try {
      divisionArr.map((num, index) => {
        num = Number(num);

        if (!num) throw new Error('[ERROR] 입력값이 숫자가 아닙니다.');
        else if (num < 0) throw new Error('[ERROR] 음수 입력');

        sum += num;
        divisionArr.length - 1 === index &&
          MissionUtils.Console.print('결과 : ' + sum);
      });
    } catch (error) {
      throw error;
    }
  }
}

export default App;
