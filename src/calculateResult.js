export function calculateResult(numbers) {
  //기본값 0 설정으로 빈 문자열 입력시 0 반환
  return numbers.reduce((sum, num) => sum + num, 0);
}
