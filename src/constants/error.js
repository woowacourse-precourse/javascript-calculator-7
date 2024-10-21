const ERROR_PREFIX = "[ERROR]";

const ERROR_MESSAGE = {
  NO_SEPARATOR:
    "구분자 없이 숫자와 문자만 입력하는 것은 잘못된 형식입니다. 올바른 구분자를 사용해주세요. 예시 : 1:2:3",
  DUPLICATE_CUSTOM_SEPARATOR:
    "커스텀 구분자가 중복되어 입력되었습니다. 고유한 커스텀 구분자를 사용해주세요",
  NOT_NUMBER:
    "숫자가 아닌 값이 입력되었습니다. 계산을 위해 숫자만 입력해주세요",
  NEGATIVE_NUMBER:
    "양수가 아닌 음수값이 입력되었습니다. 계산을 위해 양수만 입력해주세요",
  INVALIDATE_FORMAT:
    "잘못된 형식입니다. 커스텀 구분자 또는 기본 구분자 (',' 또는 ':'를 사용해주세요) ",
};

const PREFIX_ERROR_MESSAGE = Object.entries(ERROR_MESSAGE).reduce(
  (acc, [errorKey, errorMessage]) => {
    acc[errorKey] = `${ERROR_PREFIX} : ${errorMessage}`;
    return acc;
  },
  {}
);

export { PREFIX_ERROR_MESSAGE as ERROR_MESSAGE };
