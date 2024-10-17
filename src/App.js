import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요. :"
    );

    const splitNums = this.splitString(input);
    const result = this.addNums(splitNums);
    Console.print(`결과 : ${result}`);
  }

  splitString(input) {
    if (!input || input.trim() === "") {
      return [0];
    }

    const result = input.match(/\/\/(.*?)\\n(.*)/);
    if (result) {
      const splitters = this.setSplitters(result[1]);
      const splitInput = result[2];

      const regex = new RegExp(`[${splitters}]`);
      return splitInput.split(regex).map(this.validateAndParseNumber);
    } else {
      const defaultSplitters = ",:";
      const regex = new RegExp(`[${defaultSplitters}]`);
      return input.split(regex).map(this.validateAndParseNumber);
    }
  }

  setSplitters(splitter) {
    const defaultSplitters = ",:";

    if (/\d/.test(splitter)) {
      throw new Error(
        `[ERROR] 구분자로 숫자는 사용할 수 없습니다: '${splitter}'`
      );
    }
    const escapedSplitter = splitter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    return defaultSplitters + escapedSplitter;
  }

  validateAndParseNumber(str) {
    const num = parseInt(str, 10);
    if (isNaN(num)) {
      throw new Error(`[ERROR] 유효하지 않은 숫자: '${str}'`);
    }
    return num;
  }

  addNums(nums) {
    nums.forEach((num) => {
      if (num < 0) {
        throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
      }
    });
    return nums.reduce((acc, cur) => acc + cur, 0);
  }
}

export default App;
