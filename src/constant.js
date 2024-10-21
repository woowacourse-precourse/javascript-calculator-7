const INPUT_MESSAGE = "덧셈할 문자열을 입력해 주세요.\n";
const OUTPUT_MESSAGE = "결과 : ";

const DEFAULT_DELIMITER = [",", ":"];
const CUSTOM_DELIMITER_START = "//";
const CUSTOM_DELIMITER_END = "\\n";

const ERROR = "[ERROR]: ";
const ERROR_MESSAGE = {
  INVALID_INPUT: ERROR + "숫자 또는 구분자 이외의 값이 포함되어 있습니다.",
  INVALID_DELIMITER: ERROR + "구분자 명령문이 잘못되었습니다.",
};

export {
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  DEFAULT_DELIMITER,
  CUSTOM_DELIMITER_START,
  CUSTOM_DELIMITER_END,
  ERROR_MESSAGE,
};
