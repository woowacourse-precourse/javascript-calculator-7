export default function isFirstCharNumber(str) {
  // 첫 번째 문자가 숫자인지 확인
  return /^\d/.test(str);
}
