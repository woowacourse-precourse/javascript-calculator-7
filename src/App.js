import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    // 사용할 변수
    let result = 0;
    let list = [];
    const basic = /,|:/;
    //기능 1. 입력 처리
    Console.print("덧셈할 문자열을 입력해 주세요.");
    const addNumber = await Console.readLineAsync("");
    const onlyNum = /^\d+$/.test(addNumber);
    if (addNumber == "") {
      //기능 5. "" 등의 빈 문자열 입력시
      Console.print(`결과 : ${result}`);
      return;
    }
    if (onlyNum) {
      // 기능 2. 구분자 없이 숫자만 입력된 경우
      result = addNumber;
    } else if (addNumber.match(basic)) {
      // 기능 3. 기본 구분자로 구분된 숫자 계산
      list = addNumber.split(basic).map((num) => Number(num));
    } else if (addNumber.startsWith("//")) {
      // 기능 4. 커스텀 구분자로 구분된 숫자 계산
      list = addNumber
        .substring(5)
        .split(addNumber[2])
        .map((num) => Number(num));
    } else if (!/\d/.test(str) && str !== "") {
      // 기능 5. 문자열 내 숫자가 없고, 빈 문자열이 아닌 경우
      throw new Error("[ERROR]");
    } else {
      // 기능 6. 그 외 모든 오류 사항 (제시된 기능에서 벗어나는 경우)
      throw new Error("[ERROR]");
    }

    if (list.length > 0) {
      for (let i = 0; i < list.length; i++) {
        result += list[i];
      }
    }
    // 문자열 출력
    Console.print(`결과 : ${result}`);
  }
}

export default App;
