import StringSumCalController from "./controller/StringSumCalController.js";
import Test from "./Test.js";

class App {
  constructor() {
    this.controller = new StringSumCalController();
    // this.test = new Test();
  }
  async run() {
    await this.controller.transferDelimiter();
    // await this.test.runTests();
  }
}

export default App;
