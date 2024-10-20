import { Validate } from "./Validate.js";
import { Parse } from "./Parse.js";
export class Calculator {
  calculate(input) {
    // 1. 기본 예외처리 실행
    const validate = new Validate();
    const basic = validate.basicValidate(input);
    if (basic === 0) return `결과 : 0`;
    if (basic.error) return false;

    // 2. 파싱 실행
    const parse = new Parse();
    let parseInput = parse.changeToList(input);

    // 3. 파싱된 결과 바탕으로 예외처리
    if (validate.deepValidate(parseInput).error) return false;

    // 결과 return
    return `결과 : ${this.add(...parseInput)}`;
  }
  // add 함수내 파라미터를 레스트 파라미터로 설정
  add(...numbers) {
    let result = 0;
    numbers.forEach((number) => {
      if ((number * 10) % 10 != 0) {
        result = this.floatAdd(result, number);
      } else result += number;
    });
    return result;
  }
  floatAdd(result, number) {
    // number와 result의 소수점 자릿수를 문자열 변환 후 계산
    const resultDecimals = (result.toString().split(".")[1] || "").length;
    const numberDecimals = (number.toString().split(".")[1] || "").length;

    // 더 큰 소수점 자릿수를 기준으로 계산
    const multiplier = Math.pow(10, Math.max(resultDecimals, numberDecimals));

    // 정수로 변환해 계산하고 다시 소수점 자릿수로 나눔
    return (result * multiplier + number * multiplier) / multiplier;
  }
}
