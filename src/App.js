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

  // 구분자를 기준으로 문자열 내부의 숫자를 더하는 함수
  add(inputStr) {
    if(inputStr === '') return 0;

    const { separator, numStr } = this.customSeparator(inputStr);
    // 정규 표현식에서 특수 문자가 올바르게 처리되도록 이스케이프 처리
    const escapedSeparator = separator.split('|').map(sep => this.escapeSpecialChars(sep)).join('|');
    const numArr = numStr.split(new RegExp(`[${escapedSeparator}]`)).map( num => {
      const parsedNum = Number(num);

      // 숫자가 아닌 값 처리
      if (isNaN(parsedNum)) {
        console.log(num);
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

  // 특수 문자를 이스케이프 처리하는 함수
  escapeSpecialChars(separator) {
    return separator
        .replace(/\\n/g, '\\n')  // 줄바꿈 문자 처리
        .replace(/\\t/g, '\\t')  // 탭 문자 처리
        .replace(/\\b/g, '\\\\b') // 백스페이스 문자 처리
        .replace(/[.*+?^${}()|[\]\\]/g, '\\$&');  // 정규 표현식 특수문자 처리
  }

  // 기본 구분자 또는 기본 구분자와 커스텀 구분자를 반환하는 함수
  customSeparator(inputStr) {
    const DEFAULT_SEPARATOR = ',|:';
    if(inputStr.startsWith('//')) {
      // \n를 커스텀 구분자로 지정할 시
      if (inputStr.startsWith('//\\n\\n')) {
        const numStr = inputStr.slice(5);
        return { separator: '\\n', numStr };
      }

      const endIndex = inputStr.indexOf('\\n');

      // 잘못된 구분자 형식 처리
      if (endIndex === -1) {
        throw new Error(ERROR_MESSAGES.INVALID_SEPARATOR_FORMAT);
      }

      const customSeparator = inputStr.substring(2, endIndex);
      const numStr = inputStr.slice(endIndex + 2);
      const separator = `${DEFAULT_SEPARATOR}|${customSeparator}`;
      return { separator, numStr }
    }
    return { separator: DEFAULT_SEPARATOR, numStr: inputStr };
  }

}

export default App;
