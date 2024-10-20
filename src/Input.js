import { Console } from '@woowacourse/mission-utils';
import Calculator from './Calculator.js';
import { MESSAGES } from './constants.js';

class Input {
  constructor() {
    this.calculator = new Calculator();
  }

  // 유저 입력 받기
  async getUserNumber() {
    Console.print(MESSAGES.INPUT_PROMPT);
    const userInput = await Console.readLineAsync('');

    this.calculator.calcUserInput([...userInput]);
  }
}

export default Input;
