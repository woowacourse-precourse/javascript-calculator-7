import AdditionCalculator from "./AdditionCalculator.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const additionCalculator = new AdditionCalculator();

    await additionCalculator.start();
    // Console.print("dddd");
  }
}

export default App;
