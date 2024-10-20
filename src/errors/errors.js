const ERROR = {
  INVALID_INPUT: {
    name: "InvalidInputError",
    message: "[ERROR] 유효하지 않은 입력입니다. 기본 구분자가 필요합니다.",
  },
  EMPTY_STRING: {
    name: "EmptyStringError",
    message: "[ERROR] 빈 문자열을 입력할 수 없습니다.",
  },
  MISMATCHED_DELIMITER: {
    name: "MismatchedDelimiterError",
    message:
      "[ERROR] 입력한 구분자와 일치하지 않는 구분자가 포함되어 있습니다.",
  },
  NOT_A_NUMBER: {
    name: "NotANumberError",
    message: "[ERROR] 숫자가 아닌 값이 포함되어 있습니다.",
  },
  NEGATIVE_NUMBER: {
    name: "NegativeNumberError",
    message: "[ERROR] 음수는 입력할 수 없습니다.",
  },
};

export default ERROR;
