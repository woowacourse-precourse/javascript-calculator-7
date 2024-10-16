import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async run() {
    const input_data = await MissionUtils.Console.readLineAsync();
    const sep = this.separator(input_data);
  }

  separator(str) {
    if (str[0] !== "/" || str[1] !== "/") {
      return ""; // 커스텀 구분자가 없다.
    }
    var customSep = "";
    var i = 2;
    var checkEnd = str[i] + str[i + 1];
    while (i < str.length - 2 && checkEnd !== "\\n") {
      customSep = customSep + str[i];
      i += 1;
      checkEnd = str[i] + str[i + 1];
    }
    return customSep;
  }
}

export default App;
