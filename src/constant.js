export const MESSAGE = {
  INPUT: '덧셈할 문자열을 입력해 주세요. \n',
  PRINT: '결과 : ',
  INVALID_FORMAT: '[DEFAULT] 올바른 형식으로 입력해주세요. ',
  INVALID_CUSTOM_DELIMITER_FORMAT: '[CUSTOM] 올바른 형식으로 입력해주세요.',
};

export const DEFAULT_DELIMITERS = [',', ':'];

export const REGEX = {
  DEFAULT: /^(|\d+([,:]\d+)*)$/,
  CUSTOM: /^\/\/(.)\\n/,
  FULL: /^\/\/(.)\\n(?:\d+([,:].*|\1\d+)*)?$/,
};
