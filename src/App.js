import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const userStr = await MissionUtils.Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요."
    );
    this.result(userStr);
  }

  // 입력값에서 숫자 추출하여 더하기
  result(userStr) {
    let found = userStr.match(/\d+/g);

    let num = 0;
    found.map((item) => {
      num += item;
    });
  }
}

export default App;
