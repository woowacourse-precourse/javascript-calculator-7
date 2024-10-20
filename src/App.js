import { MissionUtils } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from './constants/message/input-message.js';
import { SEPARATOR_COMMON } from './constants/separator/separator-common.js';
import { SEPARATOR_CUSTOM_START, SEPARATOR_CUSTOM_END } from './constants/separator/separator-custom.js';
import { OUTPUT_MESSAGE } from './constants/message/output-message.js';
import { ZERO } from './constants/number/number.js';

class App {
  async run() {
    // 문자열 입력 받기
    const inputNumber = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE);

    // 문자열을 배열로 변환
    const inputArray = [...inputNumber];
    MissionUtils.Console.print(inputArray);

    // 문자의 첫글자로 판별하기
    MissionUtils.Console.print(inputArray[0]);

    // 숫자인 경우
    if (Number(inputArray[0])) {
      // ",", ":"로 구분된 숫자 배열
      const numberArray = inputNumber.split(SEPARATOR_COMMON);
      let result = ZERO;

      // 숫자로 변환하여 더하기
      numberArray.forEach((numberString) => {
        // 숫자로 변환할 수 없는 경우 무시
        const num = Number(numberString);
        if (!Number.isNaN(num)) {
          result += num;
        } else {
          throw new Error('[Error] 숫자로 변환할 수 없는 값이 포함되어 있습니다.');
        }
      });
      MissionUtils.Console.print(`${OUTPUT_MESSAGE}${result}`);
      // "//"로 시작하는 경우
    } else if (inputNumber.startsWith(SEPARATOR_CUSTOM_START)) {
      const endIndex = inputNumber.indexOf(SEPARATOR_CUSTOM_END);
      const customSeparator = inputNumber.slice(SEPARATOR_CUSTOM_START.length, endIndex);

      // 구분자를 기준으로 숫자 배열을 분리
      const numberArray = inputNumber.slice(endIndex + 2).split(customSeparator);
      let result = ZERO;

      // 숫자로 변환하여 더하기
      numberArray.forEach((numberString) => {
        const num = Number(numberString);
        if (!Number.isNaN(num)) {
          MissionUtils.Console.print(num);
          result += num;
        } else {
          throw new Error('[Error] 숫자로 변환할 수 없는 값이 포함되어 있습니다.');
        }
      });
      MissionUtils.Console.print(`${OUTPUT_MESSAGE}${result}`);
    }
  }
}

export default App;
