export class Calculator {
  calculate(input) {}

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
