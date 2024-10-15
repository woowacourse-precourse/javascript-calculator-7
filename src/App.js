import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {

  }
    calculate(input) {
      const NUMBERS = input.split(/[,][:]/).map(Number);
      return NUMBERS.reduce((a,b) => a+b, 0);
    }
}

export default App;
