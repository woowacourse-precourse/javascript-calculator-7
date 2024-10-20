// 구분자 기준으로 숫자 추출
export function getNumber(string, delimiter) {
  return string
    .split(delimiter)
    .map((s) => s.trim()) // 각 요소에 대해 공백 제거
    .filter((s) => s !== ""); // 빈 문자열 요소 제거
}
