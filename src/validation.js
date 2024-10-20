export const inputValidation = (content) => {
  const IS_EMPTY = content.length === 0;

  if (IS_EMPTY) throw new Error('[ERROR] 입력하신 문자열이 없습니다.');
};
