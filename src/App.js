import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    MissionUtils.Console.print("덧셈할 문자열을 입력해 주세요.");
    let input = await MissionUtils.Console.readLineAsync();
    let result = this.calculate(input);
    MissionUtils.Console.print(`결과 : ${result}`);
  }

  calculate(input) {
    if (input === "") return 0;

    let delimiter = /[,|:]/;
    let numbersString = input;

    if (input.startsWith("//")) {
      const match = input.match(/^\/\/(.)\\n(.*)$/);
      if (match) {
        delimiter = new RegExp(`[${match[1]}]`);
        numbersString = match[2];
      } else {
        throw new Error("[ERROR] 잘못된 형식의 입력입니다.");
      }
    }

    const numbers = numbersString.split(delimiter).map((num) => {
      if (isNaN(num)) throw new Error("[ERROR] 숫자가 아닌 값이 포함되었습니다.");
      return Number(num);
    });

    const negatives = numbers.filter((num) => num < 0);
    if (negatives.length > 0) {
      throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
    }

    return numbers.reduce((sum, num) => sum + num, 0);
  }
}

export default App;
