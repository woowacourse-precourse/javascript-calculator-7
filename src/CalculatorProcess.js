import { Console } from '@woowacourse/mission-utils';
import Parser from './Parser.js';

class CalculatorProcess {
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
    const PREFIX_MESSAGE = '결과 : ';
    Console.print(PREFIX_MESSAGE + String(this.outputNum));
  }
}

export default CalculatorProcess;
