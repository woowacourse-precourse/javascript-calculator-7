import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    let separator = "";

    Console.print("덧셈할 문자열을 입력해 주세요.");
    let input = await Console.readLineAsync("");

    // 입력받은 문자열이 “//” 혹은 숫자가 아닌 값으로 시작하는지 검증한다.
    if (input.length !== 0 && isNaN(input[0]) && input.slice(0, 2) !== "//") {
      // 만약 잘못된 값을 입력받은 경우, throw문을 사용해 “[ERROR]”로 시작하는 메시지와 함께 Error를 발생시키고 애플리케이션을 종료한다.
      throw new Error("[ERROR] 잘못된 입력입니다.");
    }

    // 문자열이 “//”로 시작하는지 확인한다.
    if (input.slice(0, 2) === "//") {
      // 만약 “//”로 시작한다면, “//”부터 “\n”까지의 문자열을 커스텀 구분자로 저장한다.
      separator = input.slice(2, 3);
      input = input.slice(5);
    }

    // 쉼표(,)와 콜론(:)은 기본적으로 포함하고, 추가로 사용자 입력을 포함한 정규 표현식 생성
    const regex = new RegExp(`[${separator},:]+`);
    const numbers = input.split(regex);

    let sum = 0;

    // 문자열을 순회하면서 배열의 원소를 정수로 변환한 다음 총합에 더하는 것을 반복한다.
    for (let i = 0; i < numbers.length; i++) {
      sum += Number(numbers[i]);
    }

    if (isNaN(sum)) {
      throw new Error("[ERROR] 잘못된 입력입니다.");
    }

    Console.print("결과 : " + sum);
  }
}

export default App;
