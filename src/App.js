import { Console } from "@woowacourse/mission-utils";
import StringCalculator from "./StringCalculator.js";
class App {
  async run() {
    const input = await Console.readLineAsync();
    const calculator = new StringCalculator();
    const result = calculator.add(input);
    Console.print(`결과 : ${result}`);
  }
}

export default App;
