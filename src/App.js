import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    Console.print("덧셈할 문자열을 입력해주세요.");
    const inputStr = await Console.readLineAsync("");

    let numbersArr = [];
    //const defaultSeparators = ",:"; // 기본 구분자 (쉼표와 콜론)
    let sum = 0; // 최종 덧셈 결과

    // 쉼표와 클론으로 계산
    if (inputStr.match(/[,:]/)) {
      numbersArr = inputStr.split(/[,:]/).map(Number); // 문자열을 숫자 배열로 변환
    }

    // 커스텀 구분자로 계산(형식: //구분자\n숫자들)
    else if (inputStr.startsWith("//") && inputStr.substring(3, 5) === "\\n") {
      const customSeparator = inputStr[2]; // 커스텀 구분자 추출
      numbersArr = inputStr.substring(5).split(customSeparator).map(Number); // 커스텀 구분자로 문자열 분리

      // 예외 처리 1: 빈 문자열 입력 시
    } else if (inputStr === "") {
      Console.print("0"); // 결과 0 출력
      return;

      // 예외 처리 2: 잘못된 문자열 입력 (구분자가 없고 빈 문자열이 아님)
    } else {
      numbersArr = [Number(inputStr)]; // 단일 숫자로 처리
    }

    // 예외 처리 3: 숫자가 아니거나 0 이하인 값이 포함된 경우
    if (
      numbersArr.length > 0 &&
      numbersArr.some((num) => isNaN(num) || num <= 0)
    ) {
      console.log(numbersArr);
      throw new Error("[ERROR] 잘못된 입력이 포함되었습니다."); // 오류 발생
    }

    // 덧셈 수행
    for (const num of numbersArr) {
      sum += num;
    }

    Console.print(`결과 : ${sum}`);
  }
}

export default App;
