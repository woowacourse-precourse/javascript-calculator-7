import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    Console.print("덧셈할 문자열을 입력해 주세요.");

    const input = await Console.readLineAsync("");
    let result = this.calculate(input.trim());
    Console.print(`결과 : ${result}`);
  }

  calculate(input) {
    if (input === "") return 0;

    let [delimiter, strNumbers] = this.delimiterCheck(input);

    const splitRegex = new RegExp(delimiter, "g");

    return this.calculateSumWithValidation(strNumbers.split(splitRegex));
  }

  calculateSumWithValidation(numArr) {
    let sum = 0;
    numArr.forEach((elm) => {
      console.log(elm);
      if (isNaN(elm)) {
        throw new Error("[ERROR] 숫자가 아닌 값이 포함되었습니다.");
      }
      if (elm < 0) {
        throw new Error("[ERROR] 음수는 임력할 수 없습니다.");
      }

      sum += Number(elm);
    });
    return sum;
  }

  delimiterCheck(input) {
    const regex = /^\/\/(.)\\n(.*)$/;
    const match = input.match(regex);

    if (input.startsWith("//") && match) {
      return [match[1], match[2]];
    } else if (input.startsWith("//") && !match) {
      throw new Error("[ERROR] 입력이 올바르지 않습니다.");
    }
    return [/[,|:]/, input];
  }
}

export default App;
