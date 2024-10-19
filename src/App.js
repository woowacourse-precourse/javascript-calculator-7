import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    //문자열 입력
    Console.print("덧셈할 문자열을 입력해 주세요.");
    const input = await Console.readLineAsync("");
  
    try{
      //문자열 분리
      const sep = input.split((/,|:/));
      Console.print(sep);
    } catch (err) {
      Console.print(err);
      Console.print("[ERROR] 잘못된 값을 입력하셨습니다. 앱을 다시 실행해주세요.");
    }
  }
  
}

export default App;
