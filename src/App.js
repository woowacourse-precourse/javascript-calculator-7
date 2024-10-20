import { Console } from "@woowacourse/mission-utils";

const DEFAULT_SPLITTERS = ",:";

class CalculatorApp {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요 : "
    );

    const splitNumbers = this.splitString(input);
    const result = this.addNumbers(splitNumbers);
    Console.print(`결과 : ${result}`);
  }

  splitString(str) {
    if (!str || str.trim() === "") {
      return [0];
    }

    let input = str;
    let splitters = DEFAULT_SPLITTERS;

    const withSplitter = input.match(/^\/\/(.*?)\\n(.*)/);

    if (withSplitter) {
      splitters = this.setSplitters(withSplitter[1]);
      input = withSplitter[2];
    }

    const regex = new RegExp(`[${splitters}]`);
    const splitInput = input.split(regex);

    return splitInput.map((num) => this.validateAndParseNumber(num));
  }

  setSplitters(splitter) {
    if (/\d/.test(splitter)) {
      throw new Error(`[ERROR] 구분자로 숫자는 사용할 수 없습니다.`);
    }
    const escapedSplitter = splitter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return DEFAULT_SPLITTERS + escapedSplitter;
  }

  validateAndParseNumber(str) {
    if (!/^\d+$/.test(str)) {
      throw new Error(`[ERROR] 유효하지 않은 입력입니다`);
    }
    return Number(str);
  }

  addNumbers(nums) {
    nums.forEach((num) => {
      if (num < 0) {
        throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
      }
    });
    return nums.reduce((acc, cur) => acc + cur, 0);
  }
}

export default CalculatorApp;
