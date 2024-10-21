import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    let input = await Console.readLineAsync("Enter the numbers to calculate: ");
  }
}

export default App;
