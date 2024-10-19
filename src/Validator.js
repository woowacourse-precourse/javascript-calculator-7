import { MAX_NUM, MESSAGES, SEPARATOR } from './constants.js';

class Validator {
  // 커스텀 구분자 계산
  checkCustomSeparator(userInput) {
    let customSep = '';
    let useCustomSep = false;

    if (userInput[0] === userInput[1] && userInput[0] === '/' && userInput[3] === '\\' && userInput[4] === 'n') {
      customSep = userInput[2];
      useCustomSep = true;
    }

    return { customSep, useCustomSep };
  }

  // 커스텀 구분자 유효성 검사
  checkValidCustomSeparator(customSep) {
    if ([',', ':'].includes(customSep)) {
      throw new Error(MESSAGES.ERROR.INPUT_BASIC_SEPARATOR);
    } else if (!!Number(customSep)) {
      throw new Error(MESSAGES.ERROR.INPUT_NUMBER_SEPARATOR);
    } else if (customSep === ' ') {
      throw new Error(MESSAGES.ERROR.INPUT_SPACE);
    }
  }

  // 구분자 검사
  checkSeparator(useCustomSep, allowedSep, input, userInput, idx) {
    // 커스텀 구분자를 사용하는 경우
    if (useCustomSep && idx >= 5 && !SEPARATOR.ASSIGN_CUSTOM_SEPARATOR.includes(input)) {
      if (!allowedSep.includes(input)) {
        throw new Error(MESSAGES.ERROR.INPUT_BASIC_OR_CUSTOM_SEPARATOR);
      }
      if (isNaN(userInput[5])) {
        throw new Error(MESSAGES.ERROR.START_TO_SEPARATOR);
      }
    }
    // 커스텀 구분자를 사용하지 않는 경우
    else if (!useCustomSep) {
      if (!allowedSep.includes(input)) {
        throw new Error(MESSAGES.ERROR.INPUT_BASIC_OR_CUSTOM_SEPARATOR);
      }
      if (isNaN(userInput[0])) {
        throw new Error(MESSAGES.ERROR.START_TO_SEPARATOR);
      }
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
