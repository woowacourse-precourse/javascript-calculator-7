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
      return splitInput.split(regex).map((str) => parseInt(str, 10));
    } else {
      const defaultSplitters = ",:";
      const regex = new RegExp(`[${defaultSplitters}]`);
      return input.split(regex).map((str) => parseInt(str, 10));
    }
  }

  setSplitters(splitter) {
    const defaultSplitters = ",:";
    const escapedSplitter = splitter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return defaultSplitters + escapedSplitter;
  }

  addNums(nums) {
    return nums.reduce((acc, cur) => acc + cur, 0);
  }
}

export default App;
