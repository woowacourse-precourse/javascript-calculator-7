import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    // MissionUtils.Console.print("덧셈할 문자열을 입력해 주세요.");
    let input = await MissionUtils.Console.readLineAsync("덧셈할 문자열을 입력해 주세요.");
    try {
      let result = this.caculate(input);
      if (isNaN(result)) {throw new Error("숫자가 아닌 값이 포함되어 있습니다.")}
      MissionUtils.Console.print(`결과 : ${result}`);
    } catch(e) {
      MissionUtils.Console.print("[ERROR] 잘못된 형식의 입력입니다.");
    }
  }

  caculate(input) {
    if (input === "") {
      return 0;
    }

    // 커스텀 구분자도 추가할 것이기 때문에 변수로 선언
    let delimiter = /[, :]/

    let numbers = input.split(delimiter);
    let sum  = 0

    for (let number of numbers) {
      sum += parseInt(number);
    }




    return sum;
  }
}

export default App;