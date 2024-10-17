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
    let customInput = input.match(/^\/\/(.)\n/); // ; 추출
    let regexText = /[,:]/; // 기본 구분자 설정

    // 커스텀 구분자가 있는 케이스
    if (customInput) {
      input.split("\\n");
      regexText = new RegExp(`[${customInput[1]},:]`); // 정규식 생성
    } else {
    }
    let inpurtString = input;

    const result = inpurtString.split(regexText);
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
