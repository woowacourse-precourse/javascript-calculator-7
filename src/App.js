import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const READ_STRING = await Console.readLineAsync("입력할 문자열: ");
    const custom_seperator = this.findCustomSeperator(READ_STRING);
    Console.print(custom_seperator);
  }

  // 만약 문자열에 커스텀 구분자가 있다면, 그 구분자를 반환한다.
  findCustomSeperator(READ_STRING) {
    let custom_seperator = ",";
    const REGEX = /(\/\/).+(\\n)/gm;
    let m = REGEX.exec(READ_STRING);
    if (m) {
      const st = m[0];
      custom_seperator = st.substring(2, st.length - 2);

      return {
        success: true,
        custom_seperator: custom_seperator,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}

export default App;
