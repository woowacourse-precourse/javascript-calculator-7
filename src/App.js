import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const WRITE = await Console.readLineAsync(
      "특별한 계산기입니다. 자유롭게 입력해주세요."
    );
    //입력한 문자열에서 쉼표와 콜론을 구분자로 분리
    const SPLIT_STRING = strTest(WRITE);

    //예외처리
    //배열 안으로 옮겨 검증
    //구분자, 양수 외 모든 것은 에러 사항
    SPLIT_STRING.forEach((value) => {
      if (isNaN(value) || Number(value) <= 0) {
        throw new Error("[ERROR] 구분자와 0 이상 양수만 사용 가능합니다.");
      }
    });

    //에러 없이 입력값이 구분자 또는 양수만 있을 경우 숫자로 변환하고 합산하기
    const SPECIAL_CALCULATOR = SPLIT_STRING.map(Number).reduce((a, b) => a + b);

    //Number.MAX_SAFE_INTERGER가 초과하는 경우, 처리 테스트케이스
    //Number.MIN_SAFE_INTERGER의 미만인 경우, 처리
    Console.print(SPECIAL_CALCULATOR);
  }
}


//SPECIAL_CALCULATOR 테스트
export function strTest(t) {
  return t.split(/,|:/);
}

console.log(strTest);

export default App;