import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  // 실행 함수: 사용자 입력을 받아 계산하고 결과를 출력하는 역할
  async run() {
    // 사용자에게 문자열 입력을 요청
    MissionUtils.Console.print("덧셈할 문자열을 입력해 주세요.");

    // 비동기 방식으로 사용자 입력 받기
    let input = await MissionUtils.Console.readLineAsync();

    // 입력값을 바탕으로 계산한 결과를 얻음
    let result = this.calculate(input);

    // 결과 출력
    MissionUtils.Console.print(`결과 : ${result}`);
  }

  // 문자열을 덧셈 계산으로 변환하는 함수
  calculate(input) {
    // 빈 문자열이 입력된 경우, 결과는 0
    if (input === "") return 0;

    // 기본 구분자는 콤마(,)와 콜론(:)
    let delimiter = /[,|:]/;
    let numbersString = input;

    // 사용자 정의 구분자가 입력된 경우 (예: //;\n1;2;3)
    if (input.startsWith("//")) {
      // 사용자 정의 구분자를 찾는 정규식 매칭
      const match = input.match(/^\/\/(.)\\n(.*)$/);

      // 매칭된 경우 사용자 정의 구분자를 적용
      if (match) {
        delimiter = new RegExp(`[${match[1]}]`); // 새로운 구분자 설정
        numbersString = match[2]; // 나머지 숫자 문자열 추출
      } else {
        // 잘못된 형식의 입력인 경우 에러 발생
        throw new Error("[ERROR] 잘못된 형식의 입력입니다.");
      }
    }

    // 문자열을 구분자로 나누어 숫자 배열로 변환
    const numbers = numbersString.split(delimiter).map((num) => {
      // 숫자가 아닌 값이 포함된 경우 에러 발생
      if (isNaN(num)) throw new Error("[ERROR] 숫자가 아닌 값이 포함되었습니다.");
      return Number(num); // 숫자 변환
    });

    // 음수가 포함된 경우 에러 발생
    const negatives = numbers.filter((num) => num < 0);
    if (negatives.length > 0) {
      throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
    }

    // 모든 숫자를 더하여 결과 반환
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}

export default App;
