import { Console } from '@woowacourse/mission-utils';
import StringCalculatorUtils from './StringCalculator.js';

class App {
  async run() {
    let delimiterList = [',', ':'];
    const utils = new StringCalculatorUtils();
    let input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');

    // 구분자가 포함된 문자열
    let { customDelimiterStr, restStr } = utils.getSplitInputStr(input);

    if (customDelimiterStr) {
      const customDelimiterList = customDelimiterStr.split('');
      delimiterList = delimiterList.concat(customDelimiterList);
    }

    let numberList = utils.getParsedNumberList(restStr, delimiterList);
    let result = utils.sum(numberList);

    Console.print(`결과 : ${result}`);
  }
}

export default App;
