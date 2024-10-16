import { Console } from "@woowacourse/mission-utils";
import StringSumCalController from "./controller/StringSumCalController.js";

class App {
  constructor() {
    this.controller = new StringSumCalController();
  }
  async run() {
    await this.controller.transferDelimiter();
  }
}

export default App;
