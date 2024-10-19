import CalculatorGenerator from "./CalculatorGenerator.js";
import OutputView from "./OutputView.js";
import InputView from "./InputView.js";

/**
 * 계산기 메인
 */

class App {
  async run() {
    try {
      const userInputString = await InputView.getUserInput();
      const result = await CalculatorGenerator.getResult(userInputString);
      OutputView.printResult(result);
    } catch (error) {
      throw error;
    }
  }
}

export default App;
