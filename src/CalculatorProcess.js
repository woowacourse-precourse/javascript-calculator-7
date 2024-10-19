import { Console } from '@woowacourse/mission-utils';

class CalculatorProcess {
  inputNums = [];

  inputString = '';

  seperator = undefined;

  async getString() {
    const INPUT = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');
    this.inputString = INPUT;
  }
}
export default CalculatorProcess;
