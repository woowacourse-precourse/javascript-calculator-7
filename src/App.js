import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    const str = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.")
    console.log(str);
  }
}

export default App;
