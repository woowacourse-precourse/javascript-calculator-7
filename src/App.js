import InputCheck from "./StringCalculator/InputCheck.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const inputCheck = new InputCheck();
    try {
      await inputCheck.calculate();
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
