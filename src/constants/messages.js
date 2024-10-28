export const PROMPT_MESSAGES = Object.freeze({
  INPUT_ADDITION_CAR:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  INPUT_ATTEMPTS: '시도할 횟수는 몇 회인가요?\n',
});

export const ERROR_MESSAGES = Object.freeze({
  EMPTY_INPUT: '[ERROR] 입력 값이 비어 있습니다.',
  MISSING_DELIMITER: '[ERROR] 구분자가 입력되지 않았습니다.',
  NEGATIVE_NUMBER: '[ERROR] 음수는 입력하실 수 없습니다.',
  EMPTY_ATTEMPTS: '[ERROR] 시도 횟수를 입력해 주세요',
  INVALID_ATTEMPTS: '[ERROR] 시도 횟수는 숫자만 입력 가능합니다',
  CAR_NAME_DELIMITER_REQUIRED:
    '[ERROR] 자동차 이름을 쉼표로 구분하여 입력해 주세요.',
  CAR_NAME_LENGTH_EXCEEDED: '[ERROR] 자동차 이름은 5자 이하로 입력해 주세요',
  CAR_NAME_CONTAINS_WHITESPACE:
    '[ERROR] 이름에 공백 문자는 사용하실 수 없습니다',
});
