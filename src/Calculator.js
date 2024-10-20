class Calculator {
  constructor(input) {
    this.input = input;
  }

  checkInputValidity() {
    const splitInput = this.input.split("\\n");
    if (splitInput.length > 2) return [false, "[ERROR] 입력 문자열에 \'\\n\'이 2개 이상입니다."];

    return [true, "유효한 문자열"];
  }
}


export default Calculator;