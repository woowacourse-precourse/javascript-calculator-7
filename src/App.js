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

  verifyUserinput(customSeparator) {
    const re = new RegExp(this.separator);
    const arrValue = this.valueToCalculate.split(re);
    if (customSeparator) {
      verifyCustomSeparator(customSeparator);
    }
    verifyInvalidSeparator(arrValue, customSeparator);
    verifyInvalidNumber(arrValue);
  }

  caculateValue() {
    const re = new RegExp(this.separator);
    const arrValue = this.valueToCalculate.split(re);
    const resultValue = arrValue.reduce((acc, cur) => {
      return acc + Number(cur);
    }, 0);
    return resultValue;
  }

  async run() {
    const userinput = await this.getUserinput();
    const customSeparator = this.getCustomSeparator(userinput);
    this.updateSeparator(customSeparator);
    this.updateInputValue(userinput, customSeparator);
    this.verifyUserinput(customSeparator);
    const resultValue = this.caculateValue();
    Console.print(`결과 : ${resultValue}`);
  }
}

export default App;
