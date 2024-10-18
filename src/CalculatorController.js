import { MissionUtils } from "@woowacourse/mission-utils";
import CalculatorDTO from './CalculatorDTO';

class CalculatorController {
  #io = MissionUtils.Console;
  
  constructor(service){
  }

  async run(){
    const input = this.#io.readlineSync();
    return this.service.calculate(new CalculatorDTO(input));
  }

}

export default CalculatorController;