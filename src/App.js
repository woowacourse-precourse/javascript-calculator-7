import { MissionUtils } from "@woowacourse/mission-utils";

const FIND_CUSTOM_REGEX = /^\/\/(.*?)\\n/;

class App {
  // 기본 구분자
  static REGEX = [",", ":"];

  async run() {
    const input = await MissionUtils.Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요. \n"
    );

    // custom 구분자가 있는지 확인
    if (FIND_CUSTOM_REGEX.test(input)) {
      // 있다면 추출 후 REGEX 에 추가
      const customRegex = FIND_CUSTOM_REGEX.exec(input);

      App.REGEX.push(customRegex[1]);
    }

    console.log(App.REGEX.join("    "));
  }
}

export default App;
