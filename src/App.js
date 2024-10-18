import InputView from "./views/InputView.js"
import OutputView from "./views/OutputView.js";

class App {
  constructor(){
    this.model = new InputView();
    this.model2 = new OutputView();
  }
  async run() {
    const result = await this.model.getInput();
    this.model2.printError(result);
    this.model2.printResult(result);
    

  }
}

export default App;
