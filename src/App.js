import StringSumCalController from "./controller/StringSumCalController.js";

class App {
  constructor() {
    this.controller = new StringSumCalController();
  }
  async run() {
    await this.controller.getDelimeterType();
  }
}

export default App;
