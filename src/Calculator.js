import { Validate } from "./Validata";
import { Parse } from "./Parse";
export class Calculator {
  calculate(input) {
    const sliceNumbers = this.testRegex(input);
    if (sliceNumbers === 0) return `결과 : 0`;
    if (sliceNumbers.error) {
      return false;
    }
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
  testRegex(input) {
    const parse = new Parse();
    const validate = new Validate();
    if (validate.checkEmpty(input)) return 0;
    // 커스텀 구분자 숫자인지 확인
    if (validate.checkCustomNumber(input)) return { error: true };
    let result = "";
    result = parse.changeToList(input);
    // result type :  array<string>
    if (validate.checkNone(result)) return { error: true }; // "" 빈문자열 체크
    if (validate.checkNotNum(result)) return { error: true }; // "" 숫자인지 체크
    if (validate.checkSpace(result)) return { error: true }; // 공백 체크
    result = parse.changeFloat(result); // 정수는 정수로 소수는 소수로 형변환
    if (validate.checkMin(result)) return { error: true }; // 음수 체크
    return { error: false, numbers: result };
  }
}
