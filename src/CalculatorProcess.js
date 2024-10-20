import { Console } from '@woowacourse/mission-utils';

class CalculatorProcess {
  inputNums = [];

  inputString = '';

  seperator = undefined;

  async getString() {
    const INPUT = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');
    this.inputString = INPUT;
  }

  doParsing() {
    if (/^-?\d+([,:]-?\d+)*$/.test(this.inputString)) {
      const parsedNums = this.inputString.match(/-?\d+/g);
      this.inputNums = parsedNums.map((element) => Number(element));
    }
  }

  operatingNums() {
    this.outputNum = this.inputNums.reduce((accumulator, element) => {
      return accumulator + element;
    }, 0);
  }

}

export default CalculatorProcess;
