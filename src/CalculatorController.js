import { MissionUtils } from "@woowacourse/mission-utils";
import CalculatorDTO from './CalculatorDTO';

class CalculatorController {
  #io = MissionUtils.Console;
  
  constructor(service){
    this.service = service;
  }

  async run(){
    const input = await this.#io.readlineSync("덧셈할 문자열을 입력해 주세요.");
    return this.service.calculate(new CalculatorDTO(input));
    this.printResult(result);
  }

  printResult(result){
    this.#io.print(`결과 : ${result}`);
  }
}

export default CalculatorController;