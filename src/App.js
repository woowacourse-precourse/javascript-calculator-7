import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    Console.readLine('계산기 값을 입력해주세요.', (inputNumber) => {
      Console.print(`${inputNumber}`);
      Console.close()
    })
  }
}


export default App;
