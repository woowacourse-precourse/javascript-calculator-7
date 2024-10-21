const ERROR_PREFIX = "[ERROR]";

const ERROR_MESSAGE = {
  NO_SEPARATOR:
    "구분자 없이 숫자와 문자만 입력하는 것은 잘못된 형식입니다. 올바른 구분자를 사용해주세요. 예시 : 1:2:3",
  DUPLICATE_CUSTOM_SEPARATOR:
    "커스텀 구분자가 중복되어 입력되었습니다. 고유한 커스텀 구분자를 사용해주세요",
};

const PREFIX_ERROR_MESSAGE = Object.entries(ERROR_MESSAGE).reduce(
  (acc, [errorKey, errorMessage]) => {
    acc[errorKey] = `${ERROR_PREFIX} : ${errorMessage}`;
    return acc;
  },
  {}
);

export { PREFIX_ERROR_MESSAGE as ERROR_MESSAGE };
