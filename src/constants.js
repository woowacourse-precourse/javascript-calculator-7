export const DEFAULT_SEPARATORS = [',', ':'];
export const CUSTOM_DESIGNATORS = { start: '//', end: '\\n' };
export const CUSTOM_SEPARATOR_REGEX = /(?<=\/\/).+(?=\\n)/;

export const INVALID_CUSTOM_SEPARATOR_REGEX = /[a-zA-Z0-9가-힣ㄱ-ㅎ]/;

export const ERROR_MESSAGE = {
  positiveNum: '[ERROR] 문자열 덧셈은 1이상의 양수부터 가능합니다.',
  invalidFormat:
    '[ERROR] 유효하지 않은 형식입니다. 숫자와 기본 구분자(, 또는 :) 및 지정한 커스텀 구분자(`//지정문자\\n`)만 사용 가능합니다.',
  customPosition: '[ERROR] 커스텀 구분자 지정은 입력 앞부분에서만 가능합니다.',
  duplicatedCustom: '[ERROR] 커스텀 구분자 지정은 한 번만 가능합니다.',
  invalidCustom: '[ERROR] 커스텀 구분자는 특수기호로만 지정 가능합니다.',
};
