export const separatorSplit = (input) => {
  if (!input || input.trim() === "") {
    return [0];
  }

  const basicSeparator = /[,:]/; // 기본 구분자 , 또는 :
  let customSeparator = "";

  const customRegex = /\/\/(.+)\\n/;

  // 사용자 정의 구분자가 있는지 확인
  const match = input.match(customRegex);
  if (match) {
    customSeparator = match[1]; // 구분자 추출

    if (customSeparator.length !== 1) {
      throw new Error("[ERROR] : 구분자에 문자열을 입력할 수 없습니다.");
    }

    input = input.substring(match[0].length); // 숫자 부분 추출
  }

  // 구분자에 따라 문자열 분리
  const numbers = customSeparator
    ? input.split(customSeparator)
    : input.split(basicSeparator);

  // 숫자로 변환 및 유효성 검사
  const parsedNumbers = numbers
    .map((num) => {
      const trimmedNum = num.trim();
      if (trimmedNum === "") {
        return;
      }

      const parsedNum = +trimmedNum;

      if (Number.isNaN(parsedNum)) {
        throw new Error("[ERROR] : 숫자를 제외한 문자는 입력할 수 없습니다.");
      }
      if (parsedNum < 0) {
        throw new Error("[ERROR] : 음수는 입력할 수 없습니다.");
      }

      return parsedNum;
    })
    .filter((num) => num !== undefined);

  return parsedNumbers;
};
