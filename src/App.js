import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요. :"
    );

    const splitNums = this.splitStrings(input);
    const result = this.addCalculate(splitNums);
    Console.print(`결과 : ${result}`);
  }

  splitStrings(input) {
    const result = input.match(/\/\/(.*?)\\n(.*)/);
    if (result) {
      const splitters = this.setSplitters(result[1]);
      const splitInput = result[2];

      const regex = new RegExp(`[${splitters}]`);
      return splitInput.split(regex).map((str) => parseInt(str, 10));
    } else {
      const regex = new RegExp("[,:]");
      return input.split(regex).map((str) => parseInt(str, 10));
    }
  }

  setSplitters(splitter) {
    const escapedSplitter = splitter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return ",:" + escapedSplitter;
  }

  addCalculate(nums) {
    return nums.reduce((acc, cur) => acc + cur, 0);
  }
}

export default App;
