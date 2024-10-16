// @ts-check

import { delimiter } from '../constants/delimiter.js';
import { ERROR_MESSAGE } from '../constants/errorMessages.js';

class Validation {
  /**@param {string} input*/
  //커스텀 구분자 추출함수
  //터미널 상에 입력되는 숫자는 string으로 인식이 되어 정규표현식으로 검증 불가하다고 판단
  static extractCustomDelimiter(input) {
    if (input.startsWith('//')) {
      const delimiter = input.indexOf('\\n');
      const hasNumber = input
        .substring(2, delimiter)
        .split('')
        .filter((item) => !isNaN(Number(item)));

      if (hasNumber.length > 0) {
        throw new Error(
          `${ERROR_MESSAGE.PREFIX} ${ERROR_MESSAGE.NO_NUMBER_CUSTOM_SEPARATOR}`
        );
      }
    }
  }

  /**
   * @param {string} input
   * @returns {undefined}
   * @throws {Error}
   * */
  static validateDefaultDelimiter(input) {
    if (input.startsWith('//')) {
      return;
    }

    // 입력에서 숫자를 제거
    const nonDigits = input.replace(/\d+/g, '');

    // 남은 문자들이 모두 기본 구분자인지 확인
    if (!nonDigits.split('').every((char) => delimiter.test(char))) {
      throw new Error(
        `${ERROR_MESSAGE.PREFIX} ${ERROR_MESSAGE.INVALID_DELIMITER}`
      );
    }
  }

  /**
   * @param {string} input
   * @returns {string}
   * @throws {Error}
   * */

  static validateInput(input) {
    if (!input) {
      throw new Error(`${ERROR_MESSAGE.PREFIX} ${ERROR_MESSAGE.NO_INPUT}`);
    }

    // 오른쪽 끝에 숫자가 아닌 문자가 있는 경우
    if (!/\d$/.test(input)) {
      throw new Error(
        `${ERROR_MESSAGE.PREFIX} ${ERROR_MESSAGE.INVALID_FORMAT}`
      );
    }

    // "//"와 "\n" 사이에 아무 문자도 없을 경우
    if (/^\/\/\n/.test(input)) {
      throw new Error(
        `${ERROR_MESSAGE.PREFIX} ${ERROR_MESSAGE.EMPTY_CUSTOM_SEPARATOR}`
      );
    }

    // 입력이 숫자 혹은 "//"로 시작하지 않은 경우
    if (!/^\d|^\/\//.test(input)) {
      throw new Error(
        `${ERROR_MESSAGE.PREFIX} ${ERROR_MESSAGE.INVALID_START_CHARACTER}`
      );
    }

    //음수를 입력한 경우
    if (/-\d/.test(input)) {
      throw new Error(
        `${ERROR_MESSAGE.PREFIX} ${ERROR_MESSAGE.NO_NEGATIVE_NUMBER}`
      );
    }

    // Infinity 또는 -Infinity가 입력된 경우
    if (/Infinity|-Infinity/.test(input)) {
      throw new Error(`${ERROR_MESSAGE.PREFIX} ${ERROR_MESSAGE.NO_INFINITY}`);
    }

    // 쉼표(,)나 콜론(:)과 같은 구분자가 포함되지 않은 숫자만 입력되었을 경우
    if (/^\d+$/.test(input)) {
      throw new Error(`${ERROR_MESSAGE.PREFIX} ${ERROR_MESSAGE.NO_DELIMITER}`);
    }

    //커스텀 구분자없이 숫자와 기본 구분자를 입력하는데, 그 구분자가 ',' ':'가 아닐경우
    this.validateDefaultDelimiter(input);

    //커스텀 구분자에 숫자가 포함된 경우
    this.extractCustomDelimiter(input);
    return input;

    /**@todo 소수점 처리, 공백은 0도 생각해보기! */
  }
}

export default Validation;
