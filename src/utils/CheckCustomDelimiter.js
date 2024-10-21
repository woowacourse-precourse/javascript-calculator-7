import Errors from "../constants/Errors.js";

/**
 * 커스텀 구분자를 확인합니다.
 * @param {string} input
 * @returns string | boolean
 * @throws {Error} 잘못된 커스텀 구분자 형식일 경우
 */
const checkCustomDelimiter = (input) => {
  if (input.startsWith("//")) {
    // //와\n 사이의 문자열을 가져옵니다.
    const CUSTOM_DELIMITER_MATCH = input.match(/^\/\/(.+?)\\n/);

    // 커스텀 구분자가 있는지 확인합니다.
    if (CUSTOM_DELIMITER_MATCH) {
      // 매치된 커스텀 구분자를 가져옵니다. 첫번째 인덱스에 저장되어 있습니다.
      const CUSTOM_DELIMITER = CUSTOM_DELIMITER_MATCH[1];

      //커스텀 구분자가 숫자면 에러를 발생시킵니다.
      if (!isNaN(CUSTOM_DELIMITER)) {
        throw new Error(Errors.NUMBER_AS_DELIMITER);
      }

      // 매치된 커스텀 구분자가 한 글자인지 확인합니다.
      if (CUSTOM_DELIMITER.length === 1) {
        return CUSTOM_DELIMITER;
      } else {
        throw new Error(Errors.MULTIPLE_CHARACTERS_IN_DELIMITER);
      }
    }
    throw new Error(Errors.WRONG_CUSTOM_DELIMITER);
  }
  return false;
};

export default checkCustomDelimiter;
