import { Console } from "@woowacourse/mission-utils";
import sumNum from "./Calculator.js";
import InputView from "./InputView.js";
import OutputView from "./OutputView.js";

class App {
  async run() {
    let separator = [];
    let customSeperator = "";

    try {
      const inputView = new InputView();
      let string = await inputView.getInput();

      separator = string.match(/\/\/(.*?)\\n(.*)/);

      if (string.slice(0, 2) === "//" && !string.includes("\\n")) {
        throw new Error("[ERROR] 커스텀 구분자가 지정되지 않았습니다.");
      }

      // "//", "\n"이 있다면 커스텀 구분자 지정
      if (separator) {
        customSeperator = separator[1];
        string = separator[2];
      }

      if (isNaN(Number(string[0]))) {
        throw new Error(
          "[ERROR]구분자와 양수로 구성된 입력 형식을 확인해주세요."
        );
      }

      // 기본 구분자, 커스텀 구분자 기준으로 숫자 배열 생성
      let regexp = new RegExp(`[,:${customSeperator}]`);
      if (customSeperator == "" && separator) regexp = /(?=.)/;

      const numArr = string.split(regexp).map((num) => {
        if (num < 0) {
          throw new Error("[ERROR]양수로 구성된 문자열을 입력해주세요.");
        } else if (isNaN(num)) {
          throw new Error("[ERROR]구분자의 범위를 벗어났습니다.");
        }
        return Number(num);
      });
      const answer = sumNum(numArr);
      OutputView(answer);
    } catch (error) {
      throw error;
    }
  }
}

export default App;
