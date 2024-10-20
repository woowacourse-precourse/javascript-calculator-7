export const inputValidation = (content) => {
  const IS_EMPTY = content.length === 0;
  const IS_NOT_INCLUDE_NUMBER = content.split('').every((char) => isNaN(char));
  const inValidCharsRegex = new RegExp(`[^0-9${delimiter.join('')}]`);
  const HAS_INVALID_CHARS = inValidCharsRegex.test(content);

  if (IS_EMPTY) throw new Error('[ERROR] 입력하신 문자열이 없습니다.');
  if (IS_NOT_INCLUDE_NUMBER)
    throw new Error('[ERROR] 입력하신 문자열 중 숫자가 없습니다.');
  if (HAS_INVALID_CHARS)
    throw new Error(
      '[ERROR] 입력하신 문자열이 구분자와 숫자 이외의 값이 들어있습니다.'
    );
};
