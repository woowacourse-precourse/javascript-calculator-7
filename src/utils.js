export const separatorSplit = (input) => {
  if (!input || input.trim() === "") {
    return [];
  }

  const basicSeparator = /[;:]/; // 기본 구분자 ; 또는 :
  let customSeparator = "";

  const customRegex = /\/\/([^\\n]+)(?=\\n)/;

  // 사용자 정의 구분자가 있는지 확인
  const match = input.match(customRegex);
  if (match) {
    customSeparator = match[1]; // 구분자 추출

    if (customSeparator.length !== 1) {
      throw new Error(
        "[ERROR_INVALID_SEPARATOR] : 구분자에 문자열을 입력할 수 없습니다."
      );
    }

    input = input.substring(match[0].length); // 숫자 부분 추출
  }
  input = input.replace(/\\n/g, "\n").trim(); // "\n"을 문자로 처리
};
