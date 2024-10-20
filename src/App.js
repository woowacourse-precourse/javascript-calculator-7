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

    let strNumbers = input;

    let delimiter = /[,|:]/;

    const regex = /^\/\/(.)\\n(.*)$/;
    const match = input.match(regex);

    console.log(match);
    if (input.startsWith("//") && match) {
      delimiter = match[1];
      strNumbers = match[2];
    } else if (input.startsWith("//") && !match) {
      throw new Error("[ERROR] 입력이 올바르지 않습니다.");
    }

    //2. 구분자로 나누기

    const splitRegex = new RegExp(delimiter, "g");

    let numArr = strNumbers.split(splitRegex);

    //3-1. 문자열이 있을 경우
    //3-2. 음수가 있을 경우
    let sum = 0;
    numArr.forEach((elm) => {
      if (isNaN(elm))
        throw new Error("[ERROR] 숫자가 아닌 값이 포함되었습니다.");
      if (elm < 0) throw new Error("[ERROR] 음수는 임력할 수 없습니다.");

      sum += Number(elm);
    });
    return sum;
  }
}

export default App;
