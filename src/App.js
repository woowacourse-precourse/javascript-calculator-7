import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async run() {
    const input_data = await MissionUtils.Console.readLineAsync(); // 문자열을 입력 받는다.
    const [index, sep] = this.separator(input_data); // 커스텀 구분자가 있다면 커스텀 구분자를 찾는다.
    const string_data = input_data.slice(index); // 커스텀 구분자 이후의 문자열만을 다룬다.
    const num_list = this.separateNum(string_data, sep).split(" "); // 기본 구분자와 커스텀 구분자를 이용하여 문자열을 분리한다.
    const sum = this.addNum(num_list); // 분리된 숫자들을 더한다.
    MissionUtils.Console.print(`결과 : ${sum}`); // 결과를 출력한다.
  }

  addNum(numList) {
    var sum = 0;
    for (var i = 0; i < numList.length; i++) {
      if (isNaN(parseInt(numList[i])) || parseInt(numList[i]) < 0) {
        throw new Error("[ERROR]");
      }
      sum += parseInt(numList[i]);
    }
    return sum;
  }
  separateNum(str, sep) {
    str = str.replace(":", " ").replace(",", " ");
    if (sep !== "") str.replace(sep, " ");

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
    if (i >= str.length - 2) {
      throw new Error("[ERROR]");
    }
    return [i + 2, customSep];
  }
}

export default App;
