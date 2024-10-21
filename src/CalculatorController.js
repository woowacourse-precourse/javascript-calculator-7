import { MissionUtils } from "@woowacourse/mission-utils";
import CalculatorDTO from './CalculatorDTO';
import InputParser from "./InputParser";

class CalculatorController {
  #io = MissionUtils.Console;
  
  constructor(service){
    this.service = service;
  }

  async run(){
    const input = await this.#io.readLineAsync("덧셈할 문자열을 입력해 주세요.");
    const parser = new InputParser();
    const numbers = parser.parse(input);
    const result = this.service.calculate(new CalculatorDTO(input));
    this.printResult(result);
  }

  printResult(result){
    this.#io.print(`결과 : ${result}`);
  }
}

export default CalculatorController;