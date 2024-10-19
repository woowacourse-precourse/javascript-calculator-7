import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {

    // 1. 문자열 입력받기
    Console.print("덧셈할 문자열을 입력해주세요.");
    const strInput = await Console.readLineAsync(" ");
    
    // 1-2. 입력된 문자열이 null 또는 빈문자열이라면, 0을 반환한다.
    if (strInput === "" || strInput === null) {
      console.log(0);
      return;
    }
  }
}

export default App;
