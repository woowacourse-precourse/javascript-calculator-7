import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    let input = await MissionUtils.Console.readLineAsync("덧셈할 문자열을 입력해 주세요.");
    try {
      let result = this.caculate(input);
      MissionUtils.Console.print(`결과 : ${result}`);
    } catch(e) {
      MissionUtils.Console.print("[ERROR] 잘못된 형식의 입력입니다.");
      throw e;
    }
  }

  caculate(input) {
    if (input === "") {
      return 0;
    }

    // 커스텀 구분자도 추가할 것이기 때문에 변수로 선언
    let delimiter = /[,:]/;

    if (input.startsWith("//")) {
      const match = input.match(/^\/\/(.)\\n(.*)$/);
      if (match) {
        // delimiter = new RegExp(`[${match[1]}]`);
        const customDelimiter = match[1];  // 커스텀 구분자 추출
        delimiter = new RegExp(`[${delimiter.source}${customDelimiter}]`);
        // MissionUtils.Console.print(delimiter)
        input = match[2]; // \n 이후의 문자열을 처리
      } else {
        // MissionUtils.Console.print(delimiter)
        throw new Error("[ERROR] 잘못된 형식의 입력입니다.");
      }
    }


    let numbers = input.split(delimiter);
    MissionUtils.Console.print(numbers)
    MissionUtils.Console.print(delimiter)

    let sum  = 0

    for (let number of numbers) {
      MissionUtils.Console.print(number)
      // 음수 에러 처리
      if (parseInt(number) < 0) {
        throw new Error("[ERROR] 음수는 입력할 수 없습니다.")
      }
      sum += parseInt(number);
    }
    return sum;
  }
}

export default App;