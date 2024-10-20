import InputCheck from "./StringCalculator/InputCheck.js";

class App {
  async run() {
    const inputCheck = new InputCheck();
    await inputCheck.calculate();
  }
}

export default App;
