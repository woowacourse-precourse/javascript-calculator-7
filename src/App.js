import StringCalculator from "./StringCalculator.js";

class App {
  async run() {
    const stringCalculator = new StringCalculator();
    const inputString = await stringCalculator.input();

    return stringCalculator.printSumResult(inputString);
  }
}

export default App;
