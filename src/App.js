import { Console } from "@woowacourse/mission-utils";
import AddCalculator from "./AddCalculator.js";

class App {
  async run() {
    const Calculator = new AddCalculator();
    try {
      await Calculator.run();
    } catch (error) {
      Console.print("[ERROR] : ",error);
    }
  };
};

export default App;