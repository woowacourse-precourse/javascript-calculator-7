export const INPUT_QUERY = "덧셈할 문자열을 입력해 주세요.\n";

export const OUTPUT_PREFIX = "결과 : ";

export const INITIAL_SEPARATOR_LIST = [",", ":"];

export const CORRECT_CUSTOM_SEPARATOR = {
  PREFIX: "//",
  SUFFIX: "\\n",
};

export const ERROR_PREFIX = "[ERROR]: ";

export const ERROR_MESSAGE = {
  UNACCEPTABLE_INPUT: "구분자와 숫자만 입력받을 수 있습니다.",
  INVALID_SEPARATOR_LENGTH: "구분자의 길이는 1이여야 합니다.",
  START_WITH_SEPARATOR: "숫자 입력은 구분자로 시작할 수 없습니다.",
  END_WITH_SEPARATOR: "숫자 입력은 구분자로 끝날 수 없습니다.",
  DEFAULT_SEPARATOR_INCLUDE_CUSTOM_SEPARATOR:
    "커스텀 구분자는 기본 구분자와 같을 수 없습니다.",
  CUSTOM_SEPARATOR_IS_NUMBER: "커스텀 구분자는 숫자일 수 없습니다.",
};
