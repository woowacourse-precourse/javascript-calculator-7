import InputView from "./views/InputView.js"
import OutputView from "./views/OutputView.js";
import CalculatorController from "./controllers/CalculatorController.js";

class App {
  constructor(){
    const inputView = new InputView();
    const outputView = new OutputView();
    this.controller = new CalculatorController(inputView,outputView);
  }
  async run() {
    await this.controller.run();

  }
}

export default App;
