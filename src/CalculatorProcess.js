import { Console } from '@woowacourse/mission-utils';

class CalculatorProcess {
  inputNums = [];

  inputString = '';

  async getString() {
    const INPUT = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');
    this.inputString = INPUT;
  }

  doParsing() {
    if (/^\d+([,:]\d+)*$/.test(this.inputString)) {
      const parsedNums = this.inputString.match(/\d+/g);
      this.inputNums = parsedNums.map(Number);
    } else {
      const customDelimiterMatch = this.inputString.match(/^\/\/(.)\\n(.*)$/);
      if (customDelimiterMatch) {
        const customDelimiter = new RegExp(`[${customDelimiterMatch[1]},:]`);
        this.inputString = customDelimiterMatch[2];
        const parsedNums = this.inputString.split(customDelimiter).map(Number);
        this.inputNums = parsedNums;
      } else {
        throw new Error('[ERROR] 잘못된 형식의 입력입니다.');
      }
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
