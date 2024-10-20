import { MissionUtils } from "@woowacourse/mission-utils";

// 커스텀 구분자 정규식
const CUSTOM_DELIMITER_REGEX = /^\/\/(.*?)\\n/;  
// 숫자 체크 정규식
const NUMBER_CHECK_REGEX = /^[0-9]+$/; 

class CalculatorApp {
  #delimiters = [",", ":"];  // 기본 구분자
  #totalSum = 0;

  // 정규식 이스케이프 처리
  #escapeDelimiterRegExp() {
    return this.#delimiters
      .map((delimiter) => delimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|");
  }

  // 숫자 배열인지 확인
  #isNumberArray(array) {
    return array.every((item) => NUMBER_CHECK_REGEX.test(item));
  }

  // 합계 계산
  #sumValues(values) {
    return values.reduce((accumulator, value) => accumulator + Number(value), 0);
  }

  // 실행 메서드
  async run() {
    let userInput = await MissionUtils.Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    // 커스텀 구분자가 있는지 확인
    if (CUSTOM_DELIMITER_REGEX.test(userInput)) {
      const customDelimiter = CUSTOM_DELIMITER_REGEX.exec(userInput);
      this.#delimiters.push(customDelimiter[1]);  // 커스텀 구분자 추가
      userInput = userInput.replace(CUSTOM_DELIMITER_REGEX, "");  // 구분자 제거
    }
    const regexForSplitting = new RegExp(this.#escapeDelimiterRegExp());  // 구분자 기반으로 분리
    const inputArray = userInput.split(regexForSplitting);

    // 입력 값이 숫자로만 구성되었는지 확인
    // 음수이거나 숫자가 아닌 입력 값이라면 ERROR 처리
    if (!this.#isNumberArray(inputArray)) {
      throw new Error("[ERROR] 올바르지 않은 입력값입니다.");
    }
