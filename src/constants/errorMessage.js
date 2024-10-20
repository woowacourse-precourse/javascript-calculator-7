export const ERROR_HEADER = "[ERROR]";

export const ERROR_BODY = Object.freeze({
  INCLUDE_ZERO: "입력 값에 0이 포함되어 있습니다.\n 구분자와 양수로 구성된 문자열을 입력해주세요.",
  INVALID_SEPARATOR: "입력 값에 등록되지 않은 구분자가 포함되어 있습니다.\n 문자옆 앞부분의 '//'와 '\\n' 사이에 커스텀 구분자를 입력하거나, 덧셈할 문자열에 구분자와 양수만 포함되도록 입력해주세요.",
  INVALID_CUSTOM_SEPARATOR: "커스텀 구분자는 문자로 입력해주세요.",
});
