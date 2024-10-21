import { CUSTOM_EXPRESS, FORMULA } from './constants.js';

export const ERROR = {
  FORMULA_ERROR: '[ERROR] 올바른 연산 형식이 아닙니다.',
  NEGATIVE_NUMBER_ERROR: '[ERROR] 음수는 사용할 수 없습니다.',
  SEPARATOR_ERROR: '[ERROR] 허용되지 않은 구분자가 포함되어 있습니다.',
  CUSTOM_SEPERATE_ERROR: '[ERROR] 커스텀 구분자 생성 기호가 올바르지 않습니다.',
  CUSTOM_SEPERATE_N_ERROR: '[ERROR] 커스텀 구분자 생성 기호에 n이 없습니다.',
  CUSTOM_SEPERATOR_ERROR: '[ERROR] 숫자는 커스텀 구분자로 사용될 수 없습니다.',
  CUSTOM_ORDER_ERROR: '[ERROR] 커스텀 구분자 생성 순서가 올바르지 않습니다.',
  CUSTOM_INPUT_ERROR:
    '[ERROR] 커스텀 구분자 생성 기호 위치가 올바르지 않습니다.',
  ALL_ERROR: '[ERROR] 입력이 올바르지 않습니다.',
};

export function formulaTest(userInput) {
  if (!FORMULA.test(userInput)) {
    throw new Error(ERROR.FORMULA_ERROR);
  }
}

export function separatorTest(userInput) {
  if (/\d+/.test(userInput)) {
    throw new Error(ERROR.CUSTOM_SEPERATOR_ERROR);
  }
}

export function checkSeparator(inputArray) {
  inputArray.forEach((symbol) => {
    if (symbol === '') {
      throw new Error(ERROR.SEPARATOR_ERROR);
    }
  });
}

export function customSeparateTest(userInput) {
  if (!CUSTOM_EXPRESS.test(userInput)) {
    throw new Error(ERROR.CUSTOM_SEPERATE_ERROR);
  }
}

export function customN_TEst(userInput) {
  if (!userInput.includes('n')) {
    throw new Error(ERROR.CUSTOM_SEPERATE_N_ERROR);
  }
}

export function checkNumber(inputNumber) {
  inputNumber.forEach((number) => {
    if (/[^0-9\s-]/.test(number)) {
      throw new Error(ERROR.SEPARATOR_ERROR);
    }
  });
}

export function negativeNumberTest(number) {
  if (number < 0) {
    throw new Error(ERROR.NEGATIVE_NUMBER_ERROR);
  }
}
