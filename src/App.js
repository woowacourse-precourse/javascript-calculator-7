import { Console } from "@woowacourse/mission-utils";

class App {
  constructor(){
    this.defaultSeparator = [',', ':'];
  }
  
  async run() {
      Console.print('덧셈할 문자열을 입력해주세요.');
      const INPUT_DATA = await Console.readLineAsync("");
  };
}
export default App;
