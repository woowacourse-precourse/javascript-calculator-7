import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    let input = await MissionUtils.Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.'
    );

    const BASE_DIVISION = ':|,';
    const CUSTOM_PATTERN = /^\/\/(.+)\\n/;
    const customDivision =
      input.match(CUSTOM_PATTERN) && input.match(CUSTOM_PATTERN)[1];

    const NON_SPECIAL_PATTERN = /[0-9a-zA-Z]/;
    let division = '';

    if (customDivision) {
      if (NON_SPECIAL_PATTERN.test(customDivision)) {
        division = new RegExp(`${customDivision}|${BASE_DIVISION}`);
      } else {
        division = new RegExp(`\\${customDivision}|${BASE_DIVISION}`);
      }
      input = input.substring(4 + customDivision.length);
    } else {
      division = new RegExp(BASE_DIVISION);
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
