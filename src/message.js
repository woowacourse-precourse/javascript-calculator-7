export const RUN_MESSAGES = {
  INPUT: "덧셈할 문자열을 입력해 주세요.\n",
  ERROR: "[ERROR]",
  RESULT: "결과 : ",
};

export const EXTRA_NUMBERS_MESSAGE = {
  COMMA: ",",
  SEMICOLON: ";",
  CUSTOM_DELIMITER_PREFIX: "//",
  CUSTOM_DELIMITER_SUFFIX: "\\n",
};

export const CUSTOM_DELIMITER = {
  PREFIX_LENGTH: 2,
  SUFFIX_LENGTH: 2,
};

export const ERROR_MESSAGE = {
  NEGATIVE_NUMBERS: "[ERROR] 입력값에 음수를 포함할 수 없습니다.",
  CUSTOM_DELIMITER_POSITION:
    "[ERROR] 커스텀 구분자는 문자열의 시작 부분에만 위치해야 합니다.",
  INVALID_SPECIAL_CHAR_MESSAGE:
    "[ERROR] 쉼표(,)와 세미콜론(;) 및 커스텀 구분자 외에 다른 특수 문자가 포함될 수 없습니다.",
  NUMERIC_ONLY:
    "[ERROR] 입력값에는 숫자만 허용되며, 한글 또는 알파벳이 포함되면 안 됩니다.",
};
