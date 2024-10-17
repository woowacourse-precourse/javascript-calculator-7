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

  // 커스텀 구분자 계산
  calcCustomSeparator(userInput) {
    let customSep = '';

    if (userInput[0] === userInput[1] && userInput[0] === '/' && userInput[3] === '\\' && userInput[4] === 'n') {
      customSep = userInput[2];
    }

    return customSep;
  }

  // 유저 입력 문자열 계산
  calcUserInput(userInput) {
    let numString = '';
    let numSum = 0;
    let isSep = false;
    let hasDecimalPoint = false;

    const customSep = this.calcCustomSeparator(userInput);
    const allowedSeps = [...SEPARATOR.ALLOWED_SEPARATOR, customSep];

    this.validator.checkValidCustomSeparator(customSep);

    userInput.forEach((input, idx) => {
      this.validator.checkValidSeparator(input);

      // 숫자인 경우
      if (!isNaN(input) && input.trim() !== '') {
        const numResult = this.handler.handleNumberInput(input, userInput, numString, idx);
        numString = numResult.numString;
      } else {
        const sepResult = this.handler.handleSeparatorInput(
          input,
          this.handler.handleNumberInput.hasDecimalPoint,
          numString,
          allowedSeps,
          SEPARATOR.ASSIGN_CUSTOM_SEPARATOR,
          numSum
        );
        numSum = sepResult.numSum;
        this.validator.checkValidCalculateResult(numSum);
        numString = sepResult.numString;
        hasDecimalPoint = sepResult.hasDecimalPoint;
      }
    });

    if (numString !== '') {
      numSum += Number(numString);
      this.validator.checkValidCalculateResult(numSum);
    } else if (numString === '' && numSum === 0) {
    } else {
      throw new Error(MESSAGES.ERROR.END_TO_SEPARATOR);
    }
    this.output.printCalcResult(numSum);
  }
}

export default Calculator;
