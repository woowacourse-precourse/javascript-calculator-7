import StringCalculator from "./StringCalculator";

class App {
  async run() {
    const stringCalculator = new StringCalculator();
    await stringCalculator.calculate();
  }
}

export default App;
