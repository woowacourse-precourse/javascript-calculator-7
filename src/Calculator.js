import { Validate } from "./Validate.js";
import { Parse } from "./Parse.js";
export class Calculator {
  calculate(input) {
    // 1. 기본 예외처리 실행
    const validate = new Validate();
    const basic = validate.basicValidate(input);
    if (basic === 0) return `결과 : 0`;
    else if (basic.error) return false;

    // 2. 파싱 실행
    const parse = new Parse();
    let parseInput = parse.changeToList(input);
    parseInput = parse.changeFloat(parseInput);

    // 3. 파싱된 결과 바탕으로 예외처리
    if (validate.deepValidate(parseInput).error) return false;

    // 결과 return
    return `결과 : ${this.add(...parseInput)}`;
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
