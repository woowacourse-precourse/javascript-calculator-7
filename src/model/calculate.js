import { CONSTANTS } from '../constants/constants.js';

const {
  SEPARATOR_COMMON,
  ERROR_MESSAGE_CANNOT_CONVERT_NUMBER,
  ERROR_MESSAGE_NOT_INCLUDE_SEPARATOR,
  SEPARATOR_CUSTOM_START,
  SEPARATOR_CUSTOM_END,
  NUMBERS_ZERO,
} = CONSTANTS;

export const determineNumber = (numberString) => {
  const isNumber = !Number.isNaN(Number(numberString));
  return isNumber;
};

// 숫자 배열을 받아서 합을 구하는 함수
export const processNumberArray = (numberArray, initialValue) => {
  let result = initialValue;

  numberArray.forEach((numberString) => {
    const num = Number(numberString);
    if (!Number.isNaN(num)) {
      result += num;
    } else {
      throw new Error(ERROR_MESSAGE_CANNOT_CONVERT_NUMBER);
    }
  });

  return result;
};

// common 구분자를 받아서 합을 구하는 함수
export const calculateCommonSeparator = (inputNumber) => {
  const numberArray = inputNumber.split(SEPARATOR_COMMON);
  return processNumberArray(numberArray, NUMBERS_ZERO);
};

// custom 구분자를 받아서 합을 구하는 함수
export const calculateCustomSeparator = (inputNumber) => {
  const endIndex = inputNumber.indexOf(SEPARATOR_CUSTOM_END);
  const customSeparator = inputNumber.slice(
    SEPARATOR_CUSTOM_START.length,
    endIndex,
  );

  if (endIndex === -1 || !customSeparator) {
    throw new Error(ERROR_MESSAGE_NOT_INCLUDE_SEPARATOR);
  }

  const numberArray = inputNumber.slice(endIndex + 2).split(customSeparator);

  return processNumberArray(numberArray, NUMBERS_ZERO);
};

/**
 * 맨 앞 숫자가 숫자인지 문자인지 판별하는 함수.
 * 숫자면 true, 문자면 false를 반환.
 *
 * true 일 경우 common 구분자로 나누고 합을 구하는 함수로 이동
 * false 일 경우 custom 구분자로 나누고 합을 구하는 함수로 이동
 */
export const classificationDelimiter = (inputNumber, isNumber) => {
  if (isNumber === true) {
    return calculateCommonSeparator(inputNumber);
  }

  if (isNumber === false) {
    return calculateCustomSeparator(inputNumber);
  }

  return null;
};
