const MAX_LENGTH = 15;
const CUSTOM_SEPARATOR_START = '//';
const CUSTOM_SEPARATOR_END = '\\n';

const validateMaxLength = (str) => {
  if (str.length > MAX_LENGTH) throw new Error('[ERROR] 최대 글자 제한인 15자를 초과하였습니다.');
};

const validateCustomSeparatorStart = (str) => {
  if (!str.startsWith(CUSTOM_SEPARATOR_START)) throw new Error('[ERROR] 커스텀 구분자 형식이 올바르지 않습니다.');
};

const validateCustomSeparatorEnd = (str) => {
  if (!str.endsWith(CUSTOM_SEPARATOR_END)) throw new Error('[ERROR] 커스텀 구분자 형식이 올바르지 않습니다.');
};

const validateCharacters = (str, separators) => {
  if (str.split('').some((char) => isNaN(char) && !separators.includes(char))) {
    throw new Error('[ERROR] 잘못된 문자가 포함되어 있습니다.')
  };
};

export const validateDefaultLine = (str) => {
  validateMaxLength(str);
};

export const validateCustomPart = (str) => {
  validateCustomSeparatorStart(str);
  validateCustomSeparatorEnd(str);
};

export const validateTargetStringPart = (str, separators) => {
  validateMaxLength(str);
  validateCharacters(str, separators);
};
