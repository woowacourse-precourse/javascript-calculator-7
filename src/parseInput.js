export function parseInput(input) {
  //기본 구분자
  let delimiter = /[,:]/,
    numbers = input;
  //입력이 없다면 빈 배열 리턴
  if (!input) {
    return [];
  }
  //커스텀 구분자 형식 확인 및 에러 처리
  if (input.startsWith("//")) {
    const customDelimiterMatch = input.match(/^\/\/(.+)\\n(.*)/);
    if (!customDelimiterMatch) {
      throw new Error("[ERROR] 커스텀 구분자 형식이 올바르지 않습니다.");
    }
    const [, customDelimiter, rest] = customDelimiterMatch;
    //구분자 업데이트
    delimiter = new RegExp(`[${customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')},:]`);
    numbers = rest;
  }

  if (numbers.length === 0) {
    throw new Error("[ERROR] 숫자가 입력되지 않았습니다.");
  }

  const parsedNumbers = numbers.split(delimiter);

  if (parsedNumbers.some((num) => num === "")) {
    throw new Error("[ERROR] 구분자 사이에 숫자가 없습니다.");
  }
  //-(음수 표현)를 제외한 이외의 문자 에러 처리
  if (parsedNumbers.some((num) => !/^-?\d+$/.test(num))) {
    throw new Error("[ERROR] 유효하지 않은 문자가 포함되어 있습니다.");
  }

  return parsedNumbers.map(Number);
}
