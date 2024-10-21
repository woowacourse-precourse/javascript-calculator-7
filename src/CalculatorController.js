import { MissionUtils } from "@woowacourse/mission-utils";
import InputParser from "./InputParser.js";
import { UI } from "./constants.js";

class CalculatorController {
  #io = MissionUtils.Console;
  
  constructor(service){
    this.service = service;
  }

  async run(){
    const input = await this.#io.readLineAsync(UI.INPUT_QUERY);
    const parser = new InputParser();
    const numbers = parser.parse(input);
    const result = this.service.calculate(numbers);
    this.printResult(result);
  }

  printResult(result){
    this.#io.print(UI.OUTPUT(result));
  }
}

export default CalculatorController;