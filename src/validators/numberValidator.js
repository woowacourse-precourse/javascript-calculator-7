// 숫자인지 검증
export const isNumber = (value) => {
  if (isNaN(value)) return false;
  return true;
};
