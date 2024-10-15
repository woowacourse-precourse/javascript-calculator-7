import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {}

  async read(input) {
    return MissionUtils.Console.readLineAsync(input);
  }

  print(input) {
    return MissionUtils.Console.print(input);
  }
}

export default App;
