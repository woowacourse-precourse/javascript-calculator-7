import { Console } from "@woowacourse/mission-utils";
import sumNum from "./Calculator.js";
import Separator from "./Separator.js";

import InputView from "./InputView.js";
import OutputView from "./OutputView.js";

class App {
  async run() {
    let customSeparator = "";
    let string = "";

    try {
      const inputView = new InputView();
      const separator = new Separator();

      string = await inputView.getInput();
      [customSeparator, string] = separator.makeCustomSeparator(string);

      // 기본 구분자, 커스텀 구분자 기준으로 숫자 배열 생성
      let regexp = new RegExp(`[,:${customSeparator}]`);
      if (customSeparator == "" && separator) regexp = /(?=.)/;

      const numArr = string.split(regexp).map((num) => {
        if (num < 0) {
          throw new Error("[ERROR]양수로 구성된 문자열을 입력해주세요.");
        } else if (isNaN(num)) {
          throw new Error("[ERROR]구분자의 범위를 벗어났습니다.");
        }
        return Number(num);
      });

      // 출력
      const answer = sumNum(numArr);
      OutputView(answer);
    } catch (error) {
      throw error;
    }
  }
}

export default App;
