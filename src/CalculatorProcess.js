import { Console } from '@woowacourse/mission-utils';
import Parser from './Parser.js';
import { VIEW_MESSAGES } from './resources/String.js';

class CalculatorProcess {
  inputString = '';

  async getString() {
    let initInput = await Console.readLineAsync(VIEW_MESSAGES.QUERY);
    if (initInput === '') {
      // 어떠한 입력도 없는 경우
      initInput = '0';
    }
    this.inputString = initInput;
  }

  doParsing() {
    const parser = new Parser(this.inputString);
    this.inputNums = parser.parse();
  }

  operatingNums() {
    this.outputNum = this.inputNums.reduce((accumulator, element) => {
      return accumulator + element;
    }, 0);
  }

  printResult() {
    Console.print(VIEW_MESSAGES.PREFIX_RESULT + String(this.outputNum));
  }
}

export default CalculatorProcess;
