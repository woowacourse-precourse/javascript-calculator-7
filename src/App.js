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