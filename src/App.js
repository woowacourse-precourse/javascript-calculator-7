import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const line = await Console.readLineAsync('');
    Console.print(line);
  }
}

export default App;
