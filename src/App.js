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

    // 기능 2. 구분자 없이 숫자만 입력된 경우
    const onlyNum = /^\d+$/.test(addNumber);
    if (onlyNum) {
      result = addNumber;
    } else if (addNumber.match(basic)) {
      // 기능 3. 기본 구분자로 구분된 숫자 계산
      list = addNumber.split(basic).map((num) => Number(num));
    }
    if (list.length > 0) {
      for (let i = 0; i < list.length; i++) {
        result += list[i];
      }
    }
    //기능 2 계산된 문자열 출력
    Console.print(`결과 : ${result}`);
  }
}

export default App;
