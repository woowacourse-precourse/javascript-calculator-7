const checkMaximumLength = (line) => {
  if (line.length > 15) throw('[Error] 최대 글자 제한인 15자를 초과하였습니다.');
}

const checkDoubleSlashStart = (str) => {
  if (!str.startsWith('//')) throw('[Error] 커스텀 구분자를 잘못 사용하였습니다. (//로 시작해야 함)');
}

const checkBackslashNEnd = (str) => {
  if (!str.endsWith('\\n')) throw('[Error] 커스텀 구분자를 잘못 사용하였습니다. (\\n으로 끝나야 함)');
}

const checkIncludeInvalidCharacter = (str, separators) => {
  if (str.split('').some((char) => isNaN(char) && !separators.includes(char))) {
    throw('[Error] 잘못된 문자가 포함되어 있습니다.')
  };
}

export const checkLine = (line) => {
  checkMaximumLength(line);
}

export const checkCustomPart = (str) => {
  checkDoubleSlashStart(str);
  checkBackslashNEnd(str);
}

export const checkLinePart = (str, separators) => {
  checkIncludeInvalidCharacter(str, separators);
}
