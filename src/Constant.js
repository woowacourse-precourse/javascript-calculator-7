const ZERO = 0;
const RESULT_MAX_LENGTH = 2;
const CUSTOM_DELIMITER_PREFIX_LENGTH = 2;

const RESULT_PREFIX = "결과 : ";
const INPUT_MESSAGE = "덧셈할 문자열을 입력해 주세요.\n";
const EMPTY_STRING = "";
const ERROR_PREFIX = "[ERROR] ";
const INPUT_DELIMITER = "\\n";
const DELIMITER_SECTION_START = "//";

const DefaultDelimiters = {
  FIRST_DELIMITER: ",",
  SECOND_DELIMITER: ":"
}

const ErrorMessages = {
  SPLITTER_SPLIT_INPUT: ERROR_PREFIX + "입력 문자열에 \'\\n\'이 2개 이상입니다.",
  SPLITTER_ADD_DELIMITER: ERROR_PREFIX + "커스텀 구분자 입력부는 문자열 앞에 위치하여 \"//\"로 시작하고 \"\\n\"으로 끝나야 합니다.",
  CALCULATOR_CHECK_IS_POSITIVENUMBER: ERROR_PREFIX + "양수가 아닌 값은 계산할 수 없습니다."
};

export { RESULT_PREFIX, INPUT_MESSAGE, EMPTY_STRING, ErrorMessages, DELIMITER_SECTION_START, INPUT_DELIMITER, DefaultDelimiters, ZERO, CUSTOM_DELIMITER_PREFIX_LENGTH, RESULT_MAX_LENGTH };