export default function sumAllNumbers(parts) {
  // 각 부분을 숫자로 변환하고 총합을 계산한다.
  return parts.map(parseFloat).reduce((acc, curr) => acc + curr, 0);
}
