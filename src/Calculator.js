import { MissionUtils } from "@woowacourse/mission-utils";

class Calculator {
  constructor(input) {
    this.input = input;
    this.customDelimiterSection = null;
    this.customDelimiter = null;
    this.numberSection = null;
  }

  checkInputValidity() {
    const splitInput = this.input.split("\\n");

    if (splitInput.length === 2) {
      this.customDelimiterSection = splitInput[0];
      this.numberSection = splitInput[1];
    } else if (splitInput.length === 1) {
      this.customDelimiterSection = "";
      this.numberSection = splitInput[0];
    } else return [false, "[ERROR] 입력 문자열에 \'\\n\'이 2개 이상입니다."];

    if (this.customDelimiterSection !== "") {
      if (!this.customDelimiterSection.startsWith("//")) return [false, "[ERROR] 커스텀 구분자 입력부는 문자열 앞에 위치하여 \"//\"로 시작하고 \"\\n\"으로 끝나야 합니다."];
      this.customDelimiter = this.customDelimiterSection.slice(2);
    } else this.customDelimiter = "";

    return [true, "유효한 문자열"];
  }
}


export default Calculator;