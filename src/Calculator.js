import { Validate } from "./Validata";
import { Parse } from "./Parse";
export class Calculator {
  calculate(input) {
    const validate = new Validate(result);
    if (validate.basicValidate(input) === 0) retrun`결과 : 0`;
    else if (validate.basicValidate(input).error) return false;

    const parse = new Parse();
    let parseInput = parse.changeToList(input);
    parseInput = parse.changeFloat(parseInput);

    if (validate.deepValidate(parseInput).error) return false;
    return `결과 : ${this.add(...sliceNumbers.numbers)}`;
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
