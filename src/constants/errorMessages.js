export const ERROR_MESSAGE_PREFIX = "[ERROR]";

export const STRING_CALCULATOR_ERROR_MESSAGES = Object.freeze({
  emptyInput: `${ERROR_MESSAGE_PREFIX} 빈 문자열은 허용되지 않습니다.`,
  noNumbers: `${ERROR_MESSAGE_PREFIX} 구분자 앞 또는 뒤에 숫자가 입력되지 않았습니다.`,
  invalidNumber: `${ERROR_MESSAGE_PREFIX} 유효하지 않은 숫자입니다.`,
  negativeNumber: `${ERROR_MESSAGE_PREFIX} 음수는 허용되지 않습니다.`,
  emptyCustomSeparator: `${ERROR_MESSAGE_PREFIX} 커스텀 구분자가 입력되지 않았습니다.`,
});
