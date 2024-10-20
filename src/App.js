import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    var input = Console.readLineAsync();
    const stringAdder = new stringAdder(input);
    stringAdder.doCalculator();
  }
}

export default App;
