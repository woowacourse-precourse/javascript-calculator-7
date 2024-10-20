const MESSAGES = {
  INPUT_PROMPT: '덧셈할 문자열을 입력해 주세요.',
  ERROR: {
    INPUT_NEGATIVE_NUMBER: '[ERROR] 양수를 입력해야 합니다.',
    INPUT_NUMBER_SEPARATOR: '[ERROR] 커스텀 구분자를 숫자로 지정할 수 없습니다.',
    INPUT_BASIC_SEPARATOR: '[ERROR] 이미 있는 구분자를 커스텀 구분자로 지정할 수 없습니다.',
    INPUT_BASIC_OR_CUSTOM_SEPARATOR: '[ERROR] 기본 구분자 혹은 커스텀 구분자를 사용해야 합니다.',
    INPUT_SPACE: '[ERROR] 문자열에 공백을 입력할 수 없습니다.',
    START_TO_SEPARATOR: '[ERROR] 구분자로 시작하는 문자열은 입력할 수 없습니다.',
    END_TO_SEPARATOR: '[ERROR] 구분자로 끝나는 문자열은 입력할 수 없습니다.',
    OVER_MAX_NUMBER: '[ERROR] 계산기의 계산 범위를 넘어서는 수를 더할 수 없습니다.',
    CONTINUOUS_SEPARATOR: '[ERROR] 구분자는 숫자와 숫자 사이에 존재해야 합니다.',
  },
  OUTPUT_RESULT: '결과 : ',
};

const SEPARATOR = {
  ALLOWED_SEPARATOR: [',', ':'],
  ASSIGN_CUSTOM_SEPARATOR: ['/', '\\', 'n'],
};

const MAX_NUM = Number.MAX_VALUE;

export { MESSAGES, SEPARATOR, MAX_NUM };
