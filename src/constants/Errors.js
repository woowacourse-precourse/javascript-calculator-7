const Errors = Object.freeze({
  NO_COMMA_AND_COLON: "[ERROR] 숫자 사이에 콤마(,)나 콜론(:)이 없습니다.",
  WRONG_CUSTOM_DELIMITER: "[ERROR] 커스텀 구분자가 잘못되었습니다.",
  MULTIPLE_CHARACTERS_IN_DELIMITER:
    "[ERROR] 커스텀 구분자는 한 글자여야 합니다.",
  NUMBER_AS_DELIMITER: "[ERROR] 숫자를 커스텀 구분자로 사용할 수 없습니다.",
  NOT_NUMBER: "[ERROR] 숫자가 아닌 문자가 있습니다.",
  HAS_NEGATIVE: "[ERROR] 음수가 있습니다.",
});

export default Errors;
