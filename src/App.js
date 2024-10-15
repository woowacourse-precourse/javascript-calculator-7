import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async run() {
    const input_data = await MissionUtils.Console.readLineAsync();
    const input_str = [...input_data];
  }
}

export default App;
