const READ = {
  STRING: "덧셈할 문자열을 입력해 주세요.\n",
};

const ERROR = {
  INVALID_CUSTOM_DELIMITER: "[ERROR] 커스텀 구분자 지정이 잘못되었습니다.",
  CUSTOM_DELIMITER_HAS_NUMBER:
    "[ERROR] 커스텀 구분자는 숫자를 포함할 수 없습니다.",
  INVALID_CHARACTER:
    "[ERROR] 지정된 구분자 외 다른 문자는 구분자로 사용할 수 없습니다.",
  NEGATIVE_NUMBER: "[ERROR] 숫자는 양수만 사용할 수 있습니다. 사용된 음수 :",
};

export { READ, ERROR };
