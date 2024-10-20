import ERROR_MESSAGES from './constants/errorMessages.js';
import throwError from './error/errorHandler.js';

/**
 * 숫자가 음수일 경우 예외를 던진다.
 *
 * @function checkNegativeNumber
 * @param {number} number - 검사할 숫자
 * @throws {Error} 음수일 경우 예외를 던진다.
 */
export function checkNegativeNumber(number) {
  if (number < 0) throwError(ERROR_MESSAGES.NEGATIVE_NUMBER);
}

/**
 * 주어진 값이 유효한 숫자인지 확인한다.
 *
 * @function checkNumber
 * @param {string} value - 검사할 문자열
 * @throws {Error} 유효하지 않은 문자가 포함된 경우 예외를 던진다.
 */
export function checkNumber(value) {
  if (Number.isNaN(value)) throwError(ERROR_MESSAGES.INVALID_CHARACTER);
}

/**
 * 문자열이 비어 있는지 확인한다.
 *
 * @function isEmptyString
 * @param {string} userInput - 검사할 문자열
 * @returns {boolean} 문자열이 비어 있으면 `true`, 아니면 `false`
 */
export function isEmptyString(userInput) {
  if (userInput === '') return true;
  return false;
}

/**
 * 기본 구분자와 커스텀 구분자가 혼용되었는지 검사한다.
 *
 * @function checkForMixedDelimiters
 * @param {string} userInput - 검사할 입력 문자열
 * @throws {Error} 혼용된 구분자가 있을 경우 예외를 던진다.
 */
function checkForMixedDelimiters(userInput) {
  if (/^\/\/(.*?)\\n.*[,:]/.test(userInput))
    throwError(ERROR_MESSAGES.MIXED_DELIMITERS);
}

/**
 * 구분자만 입력된 경우를 검사한다.
 *
 * @function checkForDelimiterOnly
 * @param {string[]} splitValues - 분리된 문자열 배열
 * @throws {Error} 구분자만 있을 경우 예외를 던진다.
 */
function checkForDelimiterOnly(splitValues) {
  const isOnlyDelimeter = splitValues.every((value) => value === '');

  if (isOnlyDelimeter) throwError(ERROR_MESSAGES.ONLY_DELIMITER);
}

/**
 * 분리된 문자열 배열의 유효성을 검사한다.
 *
 * @function validateSplitValues
 * @param {string} userInput - 원본 입력 문자열
 * @param {string[]} splitValues - 분리된 문자열 배열
 * @param {boolean} hasCustomDelimiter - 커스텀 구분자가 사용되었는지 여부
 */
export function validateSplitValues(
  userInput,
  splitValues,
  hasCustomDelimiter,
) {
  checkForDelimiterOnly(splitValues);

  if (hasCustomDelimiter) checkForMixedDelimiters(userInput);
}

/**
 * 사용자 정의 구분자가 올바른 위치에 있는지 확인한다.
 *
 * @function checkCustomDelimiterPosition
 * @param {RegExpMatchArray|null} match - 정규 표현식으로 매칭된 결과
 * @throws {Error} 구분자가 올바르지 않은 위치에 있을 경우 예외를 던진다.
 */
export function checkCustomDelimiterPosition(match) {
  if (!match) throwError(ERROR_MESSAGES.CUSTOM_DELIMITER_POSITION);
}
