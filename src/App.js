import { Console } from '@woowacourse/mission-utils';
import {ERROR_MESSAGES} from "./const.js";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      const result = this.add(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  add(inputStr) {
    if(inputStr === '') return 0;

    const { separator, numStr } = this.customSeparator(inputStr);
    const numArr = numStr.split(new RegExp(`[${separator}]`)).map( num => {
      const parsedNum = Number(num);

      // 숫자가 아닌 값 처리
      if (isNaN(parsedNum)) {
        throw new Error(ERROR_MESSAGES.NOT_A_NUMBER);
      }

      // 음수 값 처리
      if (parsedNum < 0) {
        throw new Error(ERROR_MESSAGES.NEGATIVE_NUMBER);
      }

      return parsedNum;
    });
    return numArr.reduce((acc, num) => acc + num, 0);
  }

  customSeparator(inputStr) {
    let defaultSeparator = ',|:';
    if(inputStr.startsWith('//')) {
      const endIndex = inputStr.indexOf('\\n');

      // 잘못된 구분자 형식 처리
      if (endIndex === -1) {
        throw new Error(ERROR_MESSAGES.INVALID_SEPARATOR_FORMAT);
      }

      const customSeparator = inputStr.substring(2, endIndex);
      const numStr = inputStr.slice(endIndex + 2);
      const separator = `${defaultSeparator}|${customSeparator}`;
      return { separator, numStr }
    }
    return { separator: defaultSeparator, numStr: inputStr };
  }

}

export default App;
