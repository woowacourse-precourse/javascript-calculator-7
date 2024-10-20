import {
  checkCustomDelimiterPosition,
  validateSplitValues,
} from '../validator.js';

/**
 * 콤마(`,`)와 콜론(`:`)을 기본 구분자로 사용하여 입력 문자열을 분리한다.
 *
 * @function splitStringByDefaultDelimiters
 * @param {string} userInput - 분리할 사용자 입력 문자열
 * @returns {string[]} 기본 구분자로 분리된 문자열 배열
 */
function splitStringByDefaultDelimiters(userInput) {
  const DEFAULT_DELIMITER_PATTERN = /[,:]/g;
  const splitValues = userInput.split(DEFAULT_DELIMITER_PATTERN);

  return splitValues;
}

/**
 * 커스텀 구분자를 사용하여 입력 문자열을 분리한다.
 * 커스텀 구분자는 `"//[구분자]\\n"` 형식으로 지정된다.
 *
 * @function splitStringByCustomDelimiter
 * @param {string} userInput - 커스텀 구분자를 포함하는 입력 문자열
 * @throws {Error} 구분자가 올바른 위치에 있지 않을 경우 예외를 던진다.
 * @returns {string[]} 커스텀 구분자로 분리된 문자열 배열
 */
function splitStringByCustomDelimiter(userInput) {
  const CUSTOM_DELIMITER_PATTERN = /^\/\/(.*?)\\n/;
  const match = userInput.match(CUSTOM_DELIMITER_PATTERN);

  checkCustomDelimiterPosition(match);

  const customDelimiter = match[1];
  const splitValues = userInput.split('\\n')[1].split(customDelimiter);

  return splitValues;
}

/**
 * 입력 문자열에 따라 기본 또는 커스텀 구분자로 문자열을 분리한다.
 *
 * @function splitStringByDelimiter
 * @param {string} userInput - 분리할 사용자 입력 문자열
 * @returns {string[]} 기본 구분자로 분리된 문자열 배열
 */
export default function splitStringByDelimiter(userInput) {
  const hasCustomDelimiter = /\/\/(.*?)\\n/.test(userInput);
  const splitValues = hasCustomDelimiter
    ? splitStringByCustomDelimiter(userInput)
    : splitStringByDefaultDelimiters(userInput);

  validateSplitValues(userInput, splitValues, hasCustomDelimiter);

  return splitValues;
}
