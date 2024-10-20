import { REGEX_CUSTOM_DELIMITER } from "./Constant";

class Validator {
  // 커스텀 구분자 입력 검증 함수
  customDelimiterVaildation(input) {
    // 커스텀 구분자 설정이 처음에 시작하지 않는 경우
    if (!input.startsWith("//") && input.includes("//") && input.includes("\\n")) {
      throw new Error("[ERROR] : 커스텀 구분자 설정은 맨 앞에 있어야 합니다.");
    }

    const customDelimiter = input.match(REGEX_CUSTOM_DELIMITER)[1]; // 캡처된 구분자

    // 구분자가 1글자가 아닌경우
    if (customDelimiter.length !== 1) {
      throw new Error("[ERROR] : 커스텀 구분자는 1글자어야 합니다.");
    }

    // 구분자가 숫자인 경우
    if (customDelimiter.match(/\d/)) {
      throw new Error("[ERROR] : 커스텀 구분자는 숫자로 설정할 수 없습니다.");
    }
  }

  // 구분자로 구분한 값들 검증 함수
  numberArrValidation(numArr) {
    // 빈 문자열을 입력했거나 숫자 하나만 입력했으면 스킵
    if (numArr.length !== 1) {
      if (numArr[0] === "") {
        throw new Error("[ERROR] : 구분자로 시작할 수 없습니다.");
      }

      if (numArr[numArr.length - 1] === "") {
        throw new Error("[ERROR] : 구분자로 끝날 수 없습니다.");
      }

      if (numArr.some((num) => num === "")) {
        throw new Error("[ERROR] : 구분자 사이에는 반드시 숫자가 있어야 합니다.");
      }
      if (numArr.some((num) => !Number(num))) {
        throw new Error("[ERROR] : 숫자가 아닌 값이 있습니다.");
      }
      if (numArr.some((num) => Number(num) <= 0)) {
        throw new Error("[ERROR] : 0이나 음수는 입력할 수 없습니다.");
      }
    }
  }
}

export default Validator;
