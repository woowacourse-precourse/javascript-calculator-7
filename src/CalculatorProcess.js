import { Console } from '@woowacourse/mission-utils';

class CalculatorProcess {
  inputNums = [];

  inputString = '';

  async getString() {
    let initInput =
      await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');
    if (initInput === '') {
      // 어떠한 입력도 없는 경우
      initInput = '0';
    }
    this.inputString = initInput;
  }

  handleDefaultDelimiter() {
    if (/^\d+([,:]\d+)*$/.test(this.inputString)) {
      const parsedNums = this.inputString.match(/\d+/g);
      this.inputNums = parsedNums.map(Number);
      return true;
    }
    return false;
  }

  handleCustomDelimiter() {
    const customDelimiterMatch = this.inputString.match(/^\/\/(.)\\n(.*)$/);

    if (customDelimiterMatch) {
      const customDelimiter = this.escapeRegExp(customDelimiterMatch[1]);
      const delimiterRegex = new RegExp(`[${customDelimiter},:]`);
      this.inputString = customDelimiterMatch[2];
      const parsedNums = this.inputString.split(delimiterRegex).map(Number);
      this.inputNums = parsedNums;
    } else {
      throw new Error('[ERROR] 커스텀 구분자 할당 형식이 잘못 되었습니다.');
    }
  }

  escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  doParsing() {
    if (!this.handleDefaultDelimiter) {
      this.handleCustomDelimiter();
    }
  }

  operatingNums() {
    this.outputNum = this.inputNums.reduce((accumulator, element) => {
      return accumulator + element;
    }, 0);
  }

  printResult() {
    const PREFIX_MESSAGE = '결과 : ';
    Console.print(PREFIX_MESSAGE + String(this.outputNum));
  }
}

export default CalculatorProcess;
