import { checkNegativeNumber, checkNumber } from '../validator.js';

/**
 * 문자열 배열을 숫자 배열로 변환한다.
 * 각 문자열을 숫자로 변환한 후, 음수가 포함된 경우 예외를 던진다.
 *
 * @function convertStringToNumber
 * @param {string[]} splitValues - 숫자로 변환할 문자열 배열
 * @throws {Error} 문자열이 숫자가 아닌 경우 또는 음수 값이 포함된 경우 예외를 던진다.
 * @returns {number[]} 변환된 숫자 배열
 */
export default function convertStringToNumber(splitValues) {
  const numbers = splitValues.map((value) => {
    const number = Number(value);
    checkNumber(number);
    checkNegativeNumber(number);
    return number;
  });

  return numbers;
}
