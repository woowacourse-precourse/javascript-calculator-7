// 커스텀 구분자 추출
export function getCustomDelimiter(string, regex) {
  const match = string.match(regex);

  if (match) return match[1];
  return null;
}
