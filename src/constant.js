export const errorMessages = {
  unexpectedError: '[ERROR]',
  invalidDelimiter: '[ERROR] 구분자 입력이 잘못되었습니다.',
  invalidCustomDelimiter: '[ERROR] 유효한 커스텀 구분자가 아닙니다.("1-9", "//", ".", "\\n", 공백)',
  notInputCustomDelimiter: '[ERROR] 커스텀 구분자가 입력되지 않았습니다.',
  duplicatedDelimiter: '[ERROR] 이미 등록된 구분자입니다.',
};

export const Regex = {
  customDelimiter: /^\/\/(.)+\\n/,
  valid: /^\/\/(.)+\\n(?:\d+[^0-9])*\d+$|^(?:\d+[^0-9])*\d+$/,
  invalidCustomDelimiter: /^\/\/[(\/\/)(\.)(\\n)(\d)]\\n/,
  notInputCustomDelimiter: /^\/\/\\n/,
};
