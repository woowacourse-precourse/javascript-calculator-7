export const errorMessages = {
  unexpectedError: '예상치 못한 에러가 발생했습니다.',
  invalidDelimiter: '구분자 입력이 잘못되었습니다.',
  invalidCustomDelimiter: '유효한 커스텀 구분자가 아닙니다.("1-9", "//", ".", "\\n", 공백)',
  notInputCustomDelimiter: '커스텀 구분자가 입력되지 않았습니다.',
  duplicatedDelimiter: '이미 등록된 구분자입니다.',
};

export const Regex = {
  customDelimiter: /^\/\/(.)+\\n/,
  valid: /^\/\/(.)+\\n(?:\d+[^0-9])*\d+$|^(?:\d+[^0-9])*\d+$/,
  invalidCustomDelimiter: /^[(\/\/)(\.)(\\n)(\d)]/,
};
