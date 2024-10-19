/**
 * 메세지 , 디폴트 구분자 상수
 */

const ERROR_MESSAGE = {
  WRONG_INPUT_STRING: Object.freeze(`[ERROR] 입력 형식이 잘못되었습니다.`),
  WRONG_INPUT_STRING_NEGATIVE: Object.freeze(
    `[ERROR] 음수는 입력할 수 없습니다.`
  ),
  WRONG_CUSTOM_DELIMETER: Object.freeze(
    `[ERROR] 커스텀 구분자가 올바르지 않습니다.`
  ),
  WRONG_DEFAULT_DELIMETER: Object.freeze(
    `[ERROR] 기본 구분자가 올바르지 않습니다.`
  ),
};

const INPUT_MESSAGE = {
  COMPOUND_STRING: Object.freeze(`덧셈할 문자열을 입력해 주세요. `),
};

const OUTPUT_MESSAGE = {
  RESULT: Object.freeze(`결과 : `),
};

const DEFAULT_DELIMITER = /[,:]/;

export { ERROR_MESSAGE, INPUT_MESSAGE, OUTPUT_MESSAGE, DEFAULT_DELIMITER };
