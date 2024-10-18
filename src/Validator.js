import { MAX_NUM, MESSAGES } from './constants.js';

class Validator {
  // 구분자 유효성 검사
  checkValidSeparator(sep) {
    if (sep === '-') {
      throw new Error(MESSAGES.ERROR.INPUT_DASH_SEPARATOR);
    } else if (sep === ' ') {
      throw new Error(MESSAGES.ERROR.INPUT_SPACE);
    }
  }

  // 커스텀 구분자 유효성 검사
  checkValidCustomSeparator(customSep) {
    if ([',', ':'].includes(customSep)) {
      throw new Error(MESSAGES.ERROR.INPUT_BASIC_SEPARATOR);
    } else if (!!Number(customSep)) {
      throw new Error(MESSAGES.ERROR.INPUT_NUMBER_SEPARATOR);
    }
  }

  // 계산 결과 유효성 검사
  checkValidCalculateResult(calcResult) {
    if (calcResult > MAX_NUM) {
      throw new Error(MESSAGES.ERROR.OVER_MAX_NUMBER);
    }
  }

  // 입력 문자열 검사
  checkValidInput(userInput, idx, customSep) {
    if (
      (isNaN(userInput[0]) && userInput[0] !== '/') ||
      (userInput.length >= 5 && isNaN(userInput[5]) && userInput[5] !== '/' && customSep !== '')
    ) {
      throw new Error(MESSAGES.ERROR.START_TO_SEPARATOR);
    }
  }
}

export default Validator;
