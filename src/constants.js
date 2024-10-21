const CALCULATION_MESSAGE = Object.freeze({
  START_CALCULATION: '덧셈할 문자열을 입력해 주세요.',
  END_CALCULATION: '계산 종료',
  RESTART_INPUT: '새로운 계산을 시작하려면 1, 종료하려면 2를 입력하세요.',
});

const USER_SELECTION = Object.freeze({
  RESTART: '1',
  END: '2',
});

const ERROR_MESSAGE = Object.freeze({
  EMPTY_INPUT: '[ERROR] 값을 입력하지 않았습니다.',
  NEGATIVE_NUMBER: '[ERROR] 음수는 허용되지 않습니다.',
  INVALID_INPUT: '[ERROR] 잘못된 입력입니다.',
});


export { CALCULATION_MESSAGE, USER_SELECTION, ERROR_MESSAGE };
