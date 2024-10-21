import { Console } from '@woowacourse/mission-utils';
import {
  verifyCustomSeparator,
  verifyInvalidSeparator,
  verifyInvalidNumber,
} from './VerifyInputUtils.js';

class App {
  constructor() {
    this.separator = ',|:';
    this.valueToCalculate = '';
  }

  async getUserinput() {
    const userinput = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n'
    );
    return userinput;
  }

  getCustomSeparator(userinput) {
    const hasCustomSeparator =
      userinput.slice(0, 2) === '//' && userinput.slice(3, 5) === '\\n';
    if (hasCustomSeparator) {
      return userinput[2];
    }
    return '';
  }

  //커스텀 구분자를 구분자에 추가
  updateSeparator(customSeparator) {
    if (customSeparator) {
      this.separator = `${this.separator}|${customSeparator}`;
    }
  }

  updateInputValue(userinput, customSeparator) {
    if (customSeparator) {
      this.valueToCalculate = userinput.slice(5);
    }
    if (!customSeparator) {
      this.valueToCalculate = userinput;
    }
  }

  verifyUserinput(numbers, customSeparator) {
    if (customSeparator) {
      verifyCustomSeparator(customSeparator);
    }
    verifyInvalidSeparator(numbers, customSeparator);
    verifyInvalidNumber(numbers);
  }

  //구분자를 기준으로 분리
  splitBySeparator() {
    const re = new RegExp(this.separator);
    return this.valueToCalculate.split(re);
  }

  caculateValue(numbers) {
    const resultValue = numbers.reduce((acc, cur) => {
      return acc + Number(cur);
    }, 0);
    return resultValue;
  }

  async run() {
    const userinput = await this.getUserinput();
    const customSeparator = this.getCustomSeparator(userinput);
    this.updateSeparator(customSeparator);
    this.updateInputValue(userinput, customSeparator);
    const numbers = this.splitBySeparator();
    this.verifyUserinput(numbers, customSeparator);
    const resultValue = this.caculateValue(numbers);
    Console.print(`결과 : ${resultValue}`);
  }
}

export default App;
