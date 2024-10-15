import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {

  }
    calculate(input) {
      if (input === "") return 0;
      const NUMBERS = input.split(/[,][:]/).map(Number);
      return NUMBERS.reduce((a,b) => a+b, 0);
    }
}

export default App;
