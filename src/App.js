import { Console } from "@woowacourse/mission-utils";
import StringSumCalController from "./controller/StringSumCalController.js";

class App {
  constructor() {
    this.controller = new StringSumCalController();
  }
  async run() {
    const result = await this.controller.transferDelimiter();
    await Console.print(result);
  }
}

export default App;
