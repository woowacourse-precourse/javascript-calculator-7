import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {

      // 문자열을 입력받는다.
      const input = await Console.readLineAsync("계산할 문자열을 입력해 주세요: ");

      const result = this.calculate(input);
      Console.print(`결과: ${result}`);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }

  }
 
}


export default App;