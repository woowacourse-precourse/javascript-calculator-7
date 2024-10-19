import StringCalculatorController from "./controller/StringCalculatorController.js";
class App {
  #stringCalculator = new StringCalculatorController();
  
  constructor(){}
  async run() { 
    await this.#stringCalculator.startCalculation();
  }
}

export default App;