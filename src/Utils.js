import { REGEX_CUSTOM_DELIMITER } from "./Constant";

class Utils {
  // 커스텀 구분자 처리 함수 (커스텀 구분자 구하고, 커스텀 구분자 설정 부분 자르기)
  processCustomDelimiter(input) {
    const customMatch = input.match(REGEX_CUSTOM_DELIMITER);
    const customDelimiter = customMatch[1]; // 캡처된 구분자

    input = input.replace(REGEX_CUSTOM_DELIMITER, ""); // 커스텀 구분자 설정 부분 자르기

    return [input, customDelimiter];
  }

  // 입력값을 구분자들로 나눠 배열로 반환하는 함수
  parseInput(input, delimiters) {
    // 구분자들로 정규식 생성
    const REGEX_DELIMITER = new RegExp(delimiters.map((s) => `\\${s}`).join("|"), "g");
    return input.split(REGEX_DELIMITER);
  }

  // 배열에 저장된 입력값 더하는 함수
  sumNumbers(numArr) {
    return numArr.reduce((acc, current) => acc + Number(current), 0);
  }
}

export default Utils;
