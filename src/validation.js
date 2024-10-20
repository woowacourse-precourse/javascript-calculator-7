export const inputValidation = (content) => {
  const IS_EMPTY = content.length === 0;
  const IS_NOT_INCLUDE_NUMBER = content.split('').every((char) => isNaN(char));

  if (IS_EMPTY) throw new Error('[ERROR] 입력하신 문자열이 없습니다.');
  if (IS_NOT_INCLUDE_NUMBER)
    throw new Error('[ERROR] 입력하신 문자열 중 숫자가 없습니다.');
};
