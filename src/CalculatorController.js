import { MissionUtils } from "@woowacourse/mission-utils";
import CalculatorDTO from './CalculatorDTO';

class CalculatorController {
  #io = MissionUtils.Console;
  
  constructor(service){
    this.service = service;
  }

  async run(){
    const input = await this.#io.readlineSync();
    return this.service.calculate(new CalculatorDTO(input));
  }
}

export default CalculatorController;