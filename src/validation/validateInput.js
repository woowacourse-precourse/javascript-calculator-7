// @ts-check

import { DELIMITER } from '../constants/delimiter.js';
import { ERROR_MESSAGE } from '../constants/errorMessages.js';
import { _pipe, extractCustomDelimiter } from '../util/util.js';

/**@param {string} message */
const throwError = (message) => {
  throw new Error(`${ERROR_MESSAGE.PREFIX} ${message}`);
};

// 값을 입력하지 않은 경우
const checkNotEmpty = (input) => {
  if (!input) throwError(ERROR_MESSAGE.NO_INPUT);
  return input;
};

// 음수를 입력한 경우
const checkPositive = (input) => {
  if (/-\d/.test(input)) throwError(ERROR_MESSAGE.NO_NEGATIVE_NUMBER);

  return input;
};

// 오른쪽 끝에 숫자가 아닌 문자가 있는 경우
const checkEndNumbers = (input) => {
  if (!/\d$/.test(input)) throwError(ERROR_MESSAGE.INVALID_FORMAT);
  return input;
};

// "//"와 "\n" 사이에 아무 문자도 없을 경우
const checkCustomDelimiter = (input) => {
  if (/^\/\/\\n/.test(input)) throwError(ERROR_MESSAGE.EMPTY_CUSTOM_SEPARATOR);
  return input;
};

// 입력이 숫자 혹은 "//"로 시작하지 않은 경우
const checkStartInput = (input) => {
  if (!/^\d|^\/\//.test(input))
    throwError(ERROR_MESSAGE.INVALID_START_CHARACTER);
  return input;
};

// Infinity 또는 -Infinity가 입력된 경우
const checkInfinity = (input) => {
  if (/Infinity|-Infinity/.test(input)) throwError(ERROR_MESSAGE.NO_INFINITY);
  return input;
};

// 쉼표(,)나 콜론(:)과 같은 구분자가 포함되지 않은 숫자만 입력되었을 경우
const checkDefaultDelimiter = (input) => {
  if (/^\d+$/.test(input)) throwError(ERROR_MESSAGE.NO_DELIMITER);
  return input;
};

// 소수점이 입력되었을경우
const checkDemical = (input) => {
  if (/\./.test(input)) throwError(ERROR_MESSAGE.NO_DECIMAL_NUMBERS);
  return input;
};

// 0이 입력되었을 경우
const checkZero = (input) => {
  if (input.includes('0')) throwError(ERROR_MESSAGE.NO_ZERO);
  return input;
};

const checkCustomDelimiterWithNumbers = (input) => {
  const customDelimiter = extractCustomDelimiter(input);
  if (customDelimiter && /\d/.test(customDelimiter)) {
    throwError(ERROR_MESSAGE.NO_NUMBER_CUSTOM_SEPARATOR);
  }
  return input;
};

const checkValidDefaultDelimiter = (input) => {
  if (input.startsWith('//')) return input;
  const nonDigits = input.replace(/\d+/g, '');
  if (!nonDigits.split('').every((char) => DELIMITER.test(char))) {
    throwError(ERROR_MESSAGE.INVALID_DELIMITER);
  }
  return input;
};

const validateInput = _pipe(
  checkNotEmpty,
  checkPositive,
  checkCustomDelimiter,
  checkEndNumbers,
  checkStartInput,
  checkInfinity,
  checkDefaultDelimiter,
  checkDemical,
  checkZero,
  checkCustomDelimiterWithNumbers,
  checkValidDefaultDelimiter
);

export { validateInput };
