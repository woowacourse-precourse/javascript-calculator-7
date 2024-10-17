import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async run() {
    const input_data = await MissionUtils.Console.readLineAsync();
    const [index, sep] = this.separator(input_data);
    const string_data = input_data.slice(index);
    const num_list = [...this.separateNum(string_data, sep)];
    const sum = this.addNum(num_list);
    MissionUtils.Console.print(`결과 : ${sum}`);
  }

  addNum(numList) {
    var sum = 0;
    for (var i = 0; i < numList.length; i++) {
      sum += parseInt(numList[i]);
    }
    return sum;
  }
  separateNum(str, sep) {
    str = str.replace(":", "").replace(",", "").replace(sep, "");
    return str;
  }
  separator(str) {
    if (str[0] !== "/" || str[1] !== "/") {
      return [0, ""]; // 커스텀 구분자가 없다.
    }
    var customSep = "";
    var i = 2;
    var checkEnd = str[i] + str[i + 1];
    while (i < str.length - 2 && checkEnd !== "\\n") {
      customSep = customSep + str[i];
      i += 1;
      checkEnd = str[i] + str[i + 1];
    } // string.length - 2까지 가면 에러 처리 필요
    return [i + 2, customSep];
  }
}

export default App;
