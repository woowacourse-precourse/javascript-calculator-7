const ERROR_TAG = "[ERROR]";

const ERROR = {
  INVALID_INPUT: {
    name: "InvalidInputError",
    message: `${ERROR_TAG} 입력한 값에 기본 구분자(쉼표 또는 콜론)가 포함되지 않았습니다. 올바른 형식으로 입력해 주세요.`,
  },
  EMPTY_STRING: {
    name: "EmptyStringError",
    message: `${ERROR_TAG} 입력된 값이 없습니다. 공백이 아닌 유효한 값을 입력해 주세요.`,
  },
  MISMATCHED_DELIMITER: {
    name: "MismatchedDelimiterError",
    message: `${ERROR_TAG} 입력된 값에 지정한 구분자와 일치하지 않는 구분자가 포함되어 있습니다. 올바른 구분자를 사용해 다시 입력해 주세요.`,
  },
  NOT_A_NUMBER: {
    name: "NotANumberError",
    message: `${ERROR_TAG} 입력된 값 중 숫자가 아닌 값이 포함되어 있습니다. 숫자만 입력해 주세요.`,
  },
  NEGATIVE_NUMBER: {
    name: "NegativeNumberError",
    message: `${ERROR_TAG} 음수는 허용되지 않습니다. 양수만 입력해 주세요.`,
  },
};

export default ERROR;
