// 숫자인지 검증
export default function isNumber(value) {
  if (isNaN(value)) return false;
  return true;
}
