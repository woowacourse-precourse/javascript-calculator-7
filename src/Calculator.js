export class Calculator {
  calculate(input) {
    const sliceNumbers = this.regexTest(input);
    if (sliceNumbers.length === 0) return `[결과 : 0]`;
    if (sliceNumbers) {
      return `[결과 : ${this.add(sliceNumbers)}]`;
    }
    return "[ERROR]";
  }

  regexTest(input) {
    if (input == "") return 0;

    let customInput = input.match(/^\/\/(.)\n/); // ; 추출
    let regexText = /[,:]/; // 기본 구분자 설정
    let result = "";

    // 커스텀 구분자가 있는 케이스
    if (customInput) {
      let sliceInput = input.split("\n")[1];
      regexText = new RegExp(`[${customInput[1]},:]`); // 정규식 생성
      result = sliceInput.split(regexText);
    } else {
      result = input.split(regexText);
    }
    return result;
  }

  // add 함수내 파라미터를 레스트 파라미터로 설정
  add(...numbers) {
    let result = 0;
    numbers.forEach((number) => {
      result += number;
    });
    return result;
  }
}
