import { Console } from '@woowacourse/mission-utils';
import {
  verifyCustomSeparator,
  verifyUselessInput,
  verifyNumber,
} from './VerifyInputUtils.js';

class App {
  constructor() {
    this.separator = ',|:';
    this.initValue = '';
  }

  async getUserinput() {
    const userinput = await Console.readLineAsync(
      '덧셈할 문자열을 입력해 주세요.\n'
    );
    return userinput;
  }

  getCustomSeparator(userinput) {
    const isCustomSeparator =
      userinput.slice(0, 2) === '//' && userinput.slice(3, 5) === '\\n';
    if (isCustomSeparator) {
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
      this.initValue = userinput.slice(5);
      console.log(this.initValue);
    }
    if (!customSeparator) {
      this.initValue = userinput;
    }
  }

  verifyUserinput(customSeparator) {
    const re = new RegExp(this.separator);
    const arrValue = this.initValue.split(re);
    if (customSeparator) {
      verifyCustomSeparator(customSeparator);
    }
    verifyUselessInput(arrValue, customSeparator);
    verifyNumber(arrValue);
  }

  caculateValue() {
    const re = new RegExp(this.separator);
    const arrValue = this.initValue.split(re);
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
