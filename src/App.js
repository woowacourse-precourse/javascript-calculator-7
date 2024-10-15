import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {}
  getInput() {
    return Console.readLineAsync();
  }
  print(output) {
    Console.print(output);
  }
}

export default App;
