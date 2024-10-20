import InputView from "./views/InputView.js"
import OutputView from "./views/OutputView.js";
import CalculatorController from "./controllers/CalculatorController.js";

class App {
  constructor(){
    const inputView = new InputView();
    this.outputView = new OutputView();
    this.controller = new CalculatorController(inputView,this.outputView);
  }
  async run() {
    try{
      await this.controller.run();
    } catch(error){
      this.outputView.printError(error.message);
      throw error;
    }
  

  }
}

export default App;
