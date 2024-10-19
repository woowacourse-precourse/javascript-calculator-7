// 입출력 메시지 관련 상수
export const MESSAGE = Object.freeze({
  PROMPT_USER_INPUT: '덧셈할 문자열을 입력해 주세요.',
  RESULT: '결과 : ',
});

// 입력 구분자 관련 상수
export const SEPARATOR = Object.freeze({
  DEFAULT: /,|:/,
  CUSTOM: /^\/\/(.*?)\\n/,
});

// 에러 메시지 관련 상수
export const ERROR_MESSAGE = Object.freeze({
  INVALID_INPUT: '[ERROR] 잘못된 입력입니다.',
});
