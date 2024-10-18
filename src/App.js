//모듈 사용
import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    //입력받기
    Console.print("덧셈할 문자열을 입력해 주세요.");
    let input = await Console.readLineAsync("");
    let inputType = validate(input);
    let delimiter;
    //구분자 설정
    // if (input.indexOf("\\n") - input.indexOf("//") == 3) {
    if (inputType == 1) {
      delimiter = /[:,]/; // 정규식 : 콜론(:)과 쉽표(,)중 하나와 일치하는 패턴
    } else if (inputType == 2) {
      // '//'와 '\n'이 존재한다면
      delimiter = [input.substr(2, 1)];
      input = input.substr(5); // 커스텀 구분자 설정 문자열을 제외한 문자열 저장
    }

    if (inputType != 0) {
      let splitInputNumber = input.split(delimiter); // 문자열을 구분자 기준으로 구분하여 저장

      let sum = 0;
      splitInputNumber.forEach((num) => {
        sum += Number(num); // 구분된 문자형 숫자를 숫자 타입으로 변환하여 덧셈
      });
      Console.print("결과 : " + sum);
    }
  }
}
function validate(inputString) {
  //유효성 검사
  try {
    const regex = /^[0-9,:]+$/; // 정규식 : 전부 숫자,쉼표,콜론으로 구성된 패턴
    if (regex.test(inputString)) {
      return 1; // case1 : 커스텀 구분자 없음
    } else if (
      inputString.indexOf("//") == 0 &&
      inputString.indexOf("\\n") == 3
    ) {
      return 2; // case2 : 커스텀 구분자 있음
    } else {
      throw new Error("[Error] 잘못된 입력 입니다.");
    }
  } catch (error) {
    console.error(error.message);
    return 0;
  }
}
export default App;
