export class Calculator {
  calculate(input) {
    const sliceNumbers = this.regexTest(input);
    if (sliceNumbers.length === 0) return `[결과 : 0]`;
    if (sliceNumbers) {
      return `[결과 : ${this.add(sliceNumbers)}]`;
    }
    return "[ERROR]";
  }

  regexTest(input) {}
  // add 함수내 파라미터를 레스트 파라미터로 설정
  add(...numbers) {
    let result = 0;
    numbers.forEach((number) => {
      result += number;
    });
    return result;
  }
}
