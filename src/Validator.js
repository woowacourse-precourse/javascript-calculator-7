import { MAX_NUM, MESSAGES } from './constants.js';

class Validator {
  // 구분자 유효성 검사
  checkValidSeparator(sep) {
    if (sep === '-') {
      throw new Error(MESSAGES.ERROR.INPUT_DASH_SEPARATOR);
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
}

export default Validator;
