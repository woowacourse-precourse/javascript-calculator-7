import { Console } from "@woowacourse/mission-utils";
import StringCalculator from "./StringCalculator.js";

class App {
  async run() {
    const calculator = new StringCalculator();
    try {
      const input = await Console.readLineAsync();
      const result = calculator.add(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
