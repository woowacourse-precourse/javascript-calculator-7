import { Console } from "@woowacourse/mission-utils";
const MSG = {
  INFORM: "덧셈할 문자열을 입력해 주세요.",
  WARN: {
    NO_VALID_INPUT: "[ERROR] 입력 값이 유효하지 않습니다.",
    INPUT_ERROR: "[ERROR] 입력을 받을 수 없습니다.",
    SPLITTER_FORM_ERROR: "[ERROR] 잘못된 구분자 형식입니다.",
    NEGATIVE_NUM_ERROR: "[ERROR] 음수는 허용되지 않습니다.",
    NUM_FORM_ERROR: "[ERROR] 숫자 형식이 잘못되었습니다.",
  },
};

class App {
  async run() {
    const res = await this.getUserInput(MSG.INFORM);

    const result = await this.calculate(res);
    Console.print(`결과 : ${result}`);
  }

  /** 사용자 입력 받기 */
  getUserInput = async (msg) => {
    try {
      const st = await Console.readLineAsync(msg);
      if (typeof st !== "string") {
        throw new Error(MSG.WARN.NO_VALID_INPUT);
      }
      return st;
    } catch (error) {
      throw new Error(MSG.WARN.INPUT_ERROR);
    }
  };

  /** 계산 */
  async calculate(input) {
    if (!input) return 0;

    let customSplitter = /[,:\n]/;
    let nums = input;

    // 커스텀 구분자
    if (input.startsWith("//")) {
      const splitterEndIdx = input.indexOf("n");

      if (splitterEndIdx === -1) {
        throw new Error(MSG.WARN.SPLITTER_FORM_ERROR);
      }

      customSplitter = input.slice(2, splitterEndIdx - 1);
      nums = input.slice(splitterEndIdx + 1);
    }

    const numbers = nums.split(new RegExp(customSplitter));
    let resnum = 0;
    numbers.forEach((num) => {
      num = num.trim();
      if (num === "") {
        throw new Error(MSG.WARN.NUM_FORM_ERROR);
      }
      if (parseInt(num, 10) < 0) {
        throw new Error(MSG.WARN.NEGATIVE_NUM_ERROR);
      }
      resnum += parseInt(num, 10);
    });
    return resnum;
  }
}

export default App;
