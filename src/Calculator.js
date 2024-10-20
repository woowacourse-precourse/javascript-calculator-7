import { Console } from '@woowacourse/mission-utils';
import Validator from './Validator.js';
import Handler from './Handler.js';
import Output from './Output.js';
import { MESSAGES, SEPARATOR } from './constants.js';

class Calculator {
  constructor() {
    this.validator = new Validator();
    this.handler = new Handler();
    this.output = new Output();
  }

  // 유저 입력 문자열 계산
  calcUserInput(userInput) {
    let numString = '';
    let numSum = 0;
    const useCustomSep = this.validator.checkCustomSeparator(userInput).useCustomSep;
    const customSep = this.validator.checkCustomSeparator(userInput).customSep;

    this.validator.checkValidCustomSeparator(customSep);

    const allowedSep = [...SEPARATOR.ALLOWED_SEPARATOR, customSep];

    userInput.forEach((input, idx) => {
      const calcResult = this.handler.handleUserInput(
        useCustomSep,
        customSep,
        allowedSep,
        input,
        userInput,
        idx,
        numString,
        numSum
      );

      numString = calcResult.numString;
      numSum = calcResult.numSum;
    });

    if (numString !== '') {
      numSum += Number(numString);
      this.validator.checkValidCalculateResult(numSum);
    } else if (numString === '' && numSum === 0) {
    } else if (numString[0] === '0') {
      throw new Error(MESSAGES.ERROR.INPUT_NEGATIVE_NUMBER);
    } else {
      throw new Error(MESSAGES.ERROR.END_TO_SEPARATOR);
    }
    this.output.printCalcResult(numSum);
  }
}

export default Calculator;
