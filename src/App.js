import { Console } from "@woowacourse/mission-utils";
//프로그래밍 요구 사항 - 라이브러리 Console API 사용할 것

class App {
  async run() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해주세요 : ");
    //비동기처리 입력을 위해 await을 사용.

    Console.print(`결과 : ${input}`);
  }
}

export default App;
