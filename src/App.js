import { MissionUtils } from "@woowacourse/mission-utils"; 
class App {
  async receiveInput() {
    return await MissionUtils.Console.readLineAsync();
  }

  async run() {
    const str = await this.receiveInput();
  }
}

export default App;