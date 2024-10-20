const ERROR_MESSAGE = Object.freeze({
  PREFIX: '[ERROR]',
  NO_INPUT: '아무 값도 입력되지 않았습니다.',
  INVALID_FORMAT: '제대로된 형식으로 다시 입력해주세요.',
  EMPTY_CUSTOM_SEPARATOR: '커스텀 구분자에 아무 입력도 없습니다.',
  NO_NUMBER_CUSTOM_SEPARATOR: '커스텀 구분자에 숫자는 들어갈 수 없습니다.',
  INVALID_START_CHARACTER:
    '양수 혹은 커스텀 구분자를 지정할 문자로 시작해주세요.',
  NO_INFINITY: '무한대는 허용되지 않습니다.',
  NO_DELIMITER: '구분자를 입력해주세요.',
  INVALID_DELIMITER:
    '올바른 구분자를 입력, 혹은 커스텀 구분자를 설정하여 입력하세요.',
  NO_NEGATIVE_NUMBER: '음수는 입력할 수 없습니다.',
  NO_ZERO: '0은 입력할 수 없습니다.',
  NO_DECIMAL_NUMBERS: '소수점이 포함된 숫자 형태는 입력할 수 없습니다.',
  NO_NUMBER_AFTER_CUSTOM_DELIMITER:
    '커스텀 구분자 지정 이후에는 숫자를 입력해주세요.',
  NO_CALCULATE: '자식 클래스에 calculate 메서드를 정의하세요. 현재 입력 값:',
  INVALID_CUSTOM_DELIMITER_FORMAT:
    '커스텀 구분자 형식이 올바르지 않습니다. "//[구분자]\\n[숫자]" 형식을 사용해주세요.',
});

export { ERROR_MESSAGE };
