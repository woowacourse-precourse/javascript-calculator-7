import { Console } from "@woowacourse/mission-utils";
import { getNumbers } from "./utils/parseInputString";
import { additionCalculator } from "./utils/calculator";

class App {
  async run() {
    const USER_INPUT = await Console.readLineAsync();
    try {
      const numbers = getNumbers(USER_INPUT);
      const sum = additionCalculator(numbers);
      Console.print(`결과 : ${sum}`);
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
