import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    // 사용할 변수
    let result = 0;
    //입력 처리
    Console.print("덧셈할 문자열을 입력해 주세요.");
    const addNumber = await Console.readLineAsync("");

    // 기능 1. 구분자 없이 숫자만 입력된 경우
    const onlyNum = /^\d+$/.test(addNumber);
    if (onlyNum) {
      result = addNumber;
    }
    Console.print(`결과 : ${result}`);
  }
}

export default App;
