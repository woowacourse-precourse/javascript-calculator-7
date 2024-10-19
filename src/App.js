import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const nums = await this.getNums();
      const result = this.getSum(nums);
      this.printResult(result);
    } catch (e) {
      Console.print("[ERROR] " + e.message);
    }
  }

  async getNums() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n",
    );
    let nums = [];

    const isCustom = input.startsWith("//");
    if (isCustom) {
      const temp = input.split("//")[1].split("\\n");
      if (temp.length < 2) {
        throw new Error("올바른 커스텀 구분자 형식이 아닙니다.");
      }
      const customSeparator = temp[0];
      nums = temp[1].split(customSeparator);
    } else {
      nums = input.split(/[,:]/);
    }

    nums = nums.map((n) => {
      const num = Number(n);
      if (num < 0) {
        throw new Error("음수는 입력하실 수 없습니다.");
      }
      if (isNaN(num)) {
        throw new Error("숫자가 아닌 값이 입력하실 수 없습니다.");
      }
      return num;
    });

    return nums;
  }

  getSum(nums = []) {
    return nums.reduce((sum, num) => sum + num, 0);
  }

  printResult(result = 0) {
    Console.print(`결과 : ${result}`);
  }
}

export default App;
