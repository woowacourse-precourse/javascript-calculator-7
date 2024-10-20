const DEFAULT_DELIMITERS = [',', ':'];

const CUSTOM_DELIMITER_PATTERN = /\/\/(.*?)\\n/;

const ERROR_MESSAGES = {
  INVALID_NUMBER_INPUT: '[ERROR] 숫자가 아닌 값을 입력할 수 없습니다.',
  NEGATIVE_NUMBER_NOT_ALLOWED: '[ERROR] 음수는 허용되지 않습니다.',
  CUSTOM_DELIMITER_NOT_AT_START:
    '[ERROR] 커스텀 구분자는 문자열의 맨 앞에 위치해야 합니다.',
  MUST_OVERRIDE_METHOD: (methodName) =>
    `${methodName}() 메서드는 반드시 오버라이딩 되어야 합니다.`,
};

export { DEFAULT_DELIMITERS, CUSTOM_DELIMITER_PATTERN, ERROR_MESSAGES };
