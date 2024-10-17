import { MissionUtils } from "@woowacourse/mission-utils"; 
class App {
  async receiveInput() {
    return await MissionUtils.Console.readLineAsync();
  }

  getDelimiter(str) {
    let delimiter = /,|:/;
    if (str.startsWith("//")) {
      const [_, customDelimiter] = str.match(/\/\/(.*?)\\n/);
      delimiter = new RegExp(/,|:/.source + '|' + customDelimiter);
    }
    return delimiter;
  }
  
  async run() {
    const str = await this.receiveInput();
    const delimiter = this.getDelimiter(str);
    MissionUtils.Console.print(delimiter);
  }
}

export default App;