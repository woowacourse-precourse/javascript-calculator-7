const ERROR_MESSAGE = Object.freeze({
  PREFIX: '[ERROR}',
  NO_INPUT: '아무 값도 입력되지 않았습니다.;',
  INVALID_FORMAT: '제대로된 형식으로 다시 입력해주세요.',
  EMPTY_CUSTOM_SEPARATOR: '커스텀 구분자에 아무 입력도 없습니다.',
  NO_NUMBER_CUSTOM_SEPARATOR: '커스텀 구분자에 숫자는 들어갈 수 없습니다.',
  INVALID_START_CHARACTER:
    '숫자 혹은 커스텀 구분자를 지정할 문자로 시작해주세요.',
  NO_NEGATIVE_NUMBER: '음수는 입력할 수 없습니다.',
  NO_INFINITY: '무한대는 허용되지 않습니다.',
});

export { ERROR_MESSAGE };
