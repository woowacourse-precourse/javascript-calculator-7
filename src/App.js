import CalculationService from "./application/CalculationService.js";
import IOHandler from "./presentation/IOHandler.js";

class App {
  #calculationService;
  
  constructor() {
    const ioHandler = new IOHandler();
    this.#calculationService = new CalculationService(ioHandler);
  }
  
  async run() {
    await this.#calculationService.execute();
  }
}

export default App;